export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            books: {
                Row: {
                    id: string
                    user_id: string
                    name: string
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id?: string
                    name: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    name?: string
                    created_at?: string
                }
            }
            accounts: {
                Row: {
                    id: string
                    book_id: string
                    name: string
                    currency: string
                    color: string | null
                    icon: string | null
                    type: 'DEBIT' | 'CREDIT' | 'CASH' | 'INVESTMENT'
                    balance: number
                    created_at: string
                }
                Insert: {
                    id?: string
                    book_id: string
                    name: string
                    currency?: string
                    color?: string | null
                    icon?: string | null
                    type: 'DEBIT' | 'CREDIT' | 'CASH' | 'INVESTMENT'
                    balance?: number
                    created_at?: string
                }
                Update: {
                    id?: string
                    book_id?: string
                    name?: string
                    currency?: string
                    color?: string | null
                    icon?: string | null
                    type?: 'DEBIT' | 'CREDIT' | 'CASH' | 'INVESTMENT'
                    balance?: number
                    created_at?: string
                }
            }
            transactions: {
                Row: {
                    id: string
                    book_id: string
                    account_id: string
                    category_id: string | null
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER'
                    amount: number
                    currency: string
                    description: string | null
                    beneficiary: string | null
                    occurred_at: string
                    location_text: string | null
                    notes: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    book_id: string
                    account_id: string
                    category_id?: string | null
                    type: 'INCOME' | 'EXPENSE' | 'TRANSFER'
                    amount: number
                    currency?: string
                    description?: string | null
                    beneficiary?: string | null
                    occurred_at?: string
                    location_text?: string | null
                    notes?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    book_id?: string
                    account_id?: string
                    category_id?: string | null
                    type?: 'INCOME' | 'EXPENSE' | 'TRANSFER'
                    amount?: number
                    currency?: string
                    description?: string | null
                    beneficiary?: string | null
                    occurred_at?: string
                    location_text?: string | null
                    notes?: string | null
                    created_at?: string
                }
            }
            categories: {
                Row: {
                    id: string
                    book_id: string
                    folder_id: string | null
                    name: string
                    color: string | null
                    icon: string | null
                }
                Insert: {
                    id?: string
                    book_id: string
                    folder_id?: string | null
                    name: string
                    color?: string | null
                    icon?: string | null
                }
                Update: {
                    id?: string
                    book_id?: string
                    folder_id?: string | null
                    name?: string
                    color?: string | null
                    icon?: string | null
                }
            }
            // Add other tables as needed (commitments, budgets, etc.)
        }
    }
}
