import { Database } from './supabase';

export type AccountProfileRow = Database['public']['Tables']['profiles']['Row']

export type AccountProfile = Omit<AccountProfileRow, 'id' | 'updated_at'>;