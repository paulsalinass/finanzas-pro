import { BookForm } from "@/components/books/BookForm"
import { createClient } from "@/utils/supabase/server"
import { notFound, redirect } from "next/navigation"

export type PageProps = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EditBookPage(props: PageProps) {
    const params = await props.params;
    const { id } = params
    const supabase = await createClient()

    const { data: book, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !book) {
        notFound()
    }

    return (
        <BookForm
            mode="edit"
            defaultValues={book}
            bookId={id}
        />
    )
}
