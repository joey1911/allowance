'use server'

import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  type ItemPublicTokenExchangeRequest,
  type LinkTokenCreateRequest,
  type ProcessorTokenCreateRequest
} from 'plaid';

let basePath = null;

switch(process.env['NEXT_PLAID_ENVIRONMENT']) {
  case 'sandbox':
    basePath = PlaidEnvironments.sandbox;
    break;
  default:
    // need to throw an error
}
const configuration = new Configuration({
  basePath,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env['NEXT_PLAID_CLIENT_ID'],
      'PLAID-SECRET': process.env['NEXT_PLAID_SECRET']
    }
  }
});

const plaidClient = new PlaidApi(configuration);

export async function createLinkToken(userId: string) {
  const request: LinkTokenCreateRequest = {
    user: {
      client_user_id: userId
    },
    client_name: 'Allowance',
    products: ['auth'],
    country_codes: ['US'],
    language: 'en',
    account_filters: {
      depository: {
        account_subtypes: ['checking', 'savings']
      }
    }
  }

  return plaidClient.linkTokenCreate(request);
};

export async function createAccessTokenFromPublicToken(publicToken: string) {
  const request: ItemPublicTokenExchangeRequest = {
    public_token: publicToken
  }

  return plaidClient.itemPublicTokenExchange(request);
};

export async function createProcessorToken(accessToken: string, accountId: string) {
  const request: ProcessorTokenCreateRequest = {
    access_token: accessToken,
    account_id: accountId,
    processor: 'marqeta'
  }

  return plaidClient.processorTokenCreate(request);
}