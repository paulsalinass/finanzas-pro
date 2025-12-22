'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function createCategory(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return { error: 'Unauthorized' }

    const name = formData.get('name') as string
    const folderId = formData.get('folderId') as string
    const color = formData.get('color') as string
    const icon = formData.get('icon') as string
    const bookId = formData.get('bookId') as string

    if (!bookId) return { error: 'Book ID is required' }

    const { error } = await supabase.from('categories').insert({
        name,
        book_id: bookId,
        folder_id: folderId === 'ungrouped' ? null : folderId,
        color,
        icon,
        user_id: user.id
    })

    if (error) return { error: error.message }
    revalidatePath('/categories')
    return { success: true }
}

export async function createFolder(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return { error: 'Unauthorized' }

    const name = formData.get('name') as string
    const color = formData.get('color') as string
    const icon = formData.get('icon') as string
    const bookId = formData.get('bookId') as string

    if (!bookId) return { error: 'Book ID is required' }

    const { error } = await supabase.from('category_folders').insert({
        name,
        book_id: bookId,
        color,
        icon,
        user_id: user.id
    })

    if (error) return { error: error.message }
    revalidatePath('/categories')
    return { success: true }
}

export async function moveCategory(categoryId: string, targetFolderId: string) {
    const supabase = await createClient()

    const { error } = await supabase.from('categories')
        .update({ folder_id: targetFolderId === 'ungrouped' ? null : targetFolderId })
        .eq('id', categoryId)

    if (error) return { error: error.message }
    revalidatePath('/categories')
    return { success: true }
}

export async function deleteCategory(id: string) {
    const supabase = await createClient()
    const { error } = await supabase.from('categories').delete().eq('id', id)
    if (error) return { error: error.message }
    revalidatePath('/categories')
}

export async function deleteFolder(id: string) {
    const supabase = await createClient()
    // Optional logic: delete items or move to ungrouped? 
    // Usually cascade or restricted. For now simple delete.
    const { error } = await supabase.from('category_folders').delete().eq('id', id)
    if (error) return { error: error.message }
    revalidatePath('/categories')
}

export async function updateCategory(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return { error: 'Unauthorized' }

    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const folderId = formData.get('folderId') as string
    const color = formData.get('color') as string
    const icon = formData.get('icon') as string

    if (!id) return { error: 'ID is required' }

    const { error } = await supabase.from('categories').update({
        name,
        folder_id: folderId === 'ungrouped' ? null : folderId,
        color,
        icon
    }).eq('id', id)

    if (error) return { error: error.message }
    revalidatePath('/categories')
    return { success: true }
}

export async function updateFolder(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return { error: 'Unauthorized' }

    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const color = formData.get('color') as string
    const icon = formData.get('icon') as string

    if (!id) return { error: 'ID is required' }

    const { error } = await supabase.from('category_folders').update({
        name,
        color,
        icon
    }).eq('id', id)

    if (error) return { error: error.message }
    revalidatePath('/categories')
    return { success: true }
}
