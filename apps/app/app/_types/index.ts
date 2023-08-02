import type { ObservableObject } from '@legendapp/state';
import type { User } from '@supabase/auth-helpers-nextjs';
import { Database } from './supabase';

/* eslint-disable camelcase */

export type AccountProfileRow = Database['public']['Tables']['profiles']['Row']

export type AccountProfile = {
  first_name?: string,
  last_name?: string,
  dob?: string,
  avatar_url?: string
}

export type AccountMetadata = {
  onboardStep?: number,
  marqetaUserToken?: string
}

export type OnboardState = ObservableObject<{
  step: number,
  user: User
}>

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