'use server'

import createSlade from '@allowance/slade';

/* eslint-disable camelcase */

const sladeClient = createSlade(
  process.env['NEXT_MARQETA_API_URL'],
  process.env['NEXT_MARQETA_APPLICATION_TOKEN'],
  process.env['NEXT_MARQETA_ADMIN_ACCESS_TOKEN']
);

export async function createMarqetaUser({
  first_name,
  last_name,
  address1,
  address2,
  city,
  state,
  postal_code,
  birth_date,
  ssn
}: {
  first_name: string,
  last_name: string,
  address1: string,
  address2?: string,
  city: string,
  state: string,
  postal_code: string,
  birth_date: string,
  ssn: string
}, userId) {
  return sladeClient.createUser({
    first_name,
    last_name,
    address1,
    address2,
    city,
    state,
    postal_code,
    country: 'US',
    birth_date,
    identifications: [{
      type: 'SSN',
      value: ssn
    }],
    token: userId
  });
};

export async function kycVerification(userId: string) {
  return sladeClient.performKycVerification(userId);
};