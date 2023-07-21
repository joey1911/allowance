// We're going to ingore camel case errors since type fields are following Marqeta field names
/* eslint-disable camelcase */

export type MarqetaUser = {
  account_holder_group_token?: string,
  active?: boolean,
  address1?: string,
  address2?: string,
  birth_date?: string, // yyyy-MM-dd format
  city?: string,
  company?: string,
  corporate_card_holder?: string,
  country?: string,
  email?: string,
  first_name?: string,
  middle_name?: string,
  last_name?: string,
  gender?: 'M' | 'F',
  honorific?: string,
  id_card_expiration_date?: string, // yyyy-MM-dd format
  id_card_number?: string,
  identifications?: {
    expiration_date?: string,
    type: string,
    value?: string
  }[ ],
  ip_address?: string,
  metadata?: object,
  nationality?: string,
  notes?: string,
  parent_token?: string,
  passport_expiration_date?: string // yyyy-MM-dd format
  passport_number?: string,
  password?: string,
  phone?: string,
  postal_code?: string,
  ssn?: string,
  state?: string,
  token?: string,
  uses_parent_ccount?: boolean
}

export type MarqetaCreateUserResponse = {
  account_holder_group_token?: string,
  active?: boolean,
  honorific?: string,
  first_name?: string,
  middle_name?: string,
  last_name?: string,
  address1?: string,
  address2?: string,
  city?: string,
  state?: string,
  postal_code?: string,
  country?: string,
  birth_date?: string,
  gender?: string,
  nationality?: string,
  email?: string,
  phone?: string,
  identifications?: {
    expiration_date?: string,
    type?: string,
    value?: string
  }[],
  ssn?: string,
  authentication?: {
    email_verified?: boolean,
    email_verified_time?: string,
    last_password_update_channel?: 'USER_CHANGE' | 'USER_RESET',
    last_password_update_time?: string
  },
  token?: string,
  password?: string,
  metadata?: object,
  status?: 'UNVERIFIED' | 'LIMITED' | 'ACTIVE' | 'SUSPENDED' | 'CLOSED',
  parent_token?: string,
  uses_parent_account?: boolean,
  notes?: string,
  business_token?: string,
  company?: string,
  corporate_card_holder?: boolean,
  id_card_expiration_date?: string,
  id_card_number?: string,
  zip?: string,
  passport_expiration_date?: string,
  passport_number?: string,
  ip_address?: string,
  created_time: string,
  last_modified_time: string
}