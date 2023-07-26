export type User = {
  email: string,
  phone: string,
  password: string,
  data: UserMetadata
}

export type UserMetadata = {
  first_name: string,
  last_name: string,
  address: string,
  address2?: string,
  city: string,
  state: string,
  zip_code: string,
  dob: Date
};