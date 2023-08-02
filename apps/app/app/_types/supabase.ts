/* eslint-disable camelcase, no-unused-vars */
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
      profiles: {
        Row: {
          address: string | null
          address2: string | null
          avatar_url: string | null
          city: string | null
          dob: string | null
          first_name: string | null
          id: string
          last_name: string | null
          state: string | null
          updated_at: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          address2?: string | null
          avatar_url?: string | null
          city?: string | null
          dob?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          state?: string | null
          updated_at?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          address2?: string | null
          avatar_url?: string | null
          city?: string | null
          dob?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          state?: string | null
          updated_at?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
