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

export type SignupDataBasic = {
  email: string,
  password: string
}

export type SignupData = {
  email: string,
  phone: string,
  password: string,
  first_name: string,
  last_name: string,
  address: string,
  address2?: string,
  city: string,
  state: string,
  zip_code: string,
  dob: Date
}