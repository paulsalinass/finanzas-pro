export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            books: {
                Row: {
                    id: string
                    user_id: string
                    name: string
                    short_description: string | null
                    currency: string | null
                    period_start: string | null
                    fiscal_close_month: string | null
                    visualization_settings: {
                        hide_cents: boolean
                        group_small_categories: boolean
                        auto_dark_mode: boolean
                    } | null
                    notification_settings: {
                        weekly_summary: boolean
                        budget_alerts: boolean
                        payment_reminders: boolean
                    } | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id?: string
                    name: string
                    short_description?: string | null
                    currency?: string | null
                    period_start?: string | null
                    fiscal_close_month?: string | null
                    visualization_settings?: Json | null
                    notification_settings?: Json | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    name?: string
                    short_description?: string | null
                    currency?: string | null
                    period_start?: string | null
                    fiscal_close_month?: string | null
                    visualization_settings?: Json | null
                    notification_settings?: Json | null
                    created_at?: string
                }
            }
        }
    }
}
