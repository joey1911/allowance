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