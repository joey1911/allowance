import { Database } from './supabase';

export type AccountProfileRow = Database['public']['Tables']['profiles']['Row']

export type AccountProfile = Omit<AccountProfileRow, 'id' | 'updated_at'>;

/* eslint-disable camelcase */
export type VerificationInformation = {
  first_name: string,
  last_name: string,
  address1: string,
  address2?: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  birth_date: string,
  ssn: string
}
/* eslint-disable camelcase */