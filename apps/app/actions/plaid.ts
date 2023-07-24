'use server'

import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  type ItemPublicTokenExchangeRequest,
  type LinkTokenCreateRequest,
  type ProcessorTokenCreateRequest,
  ProcessorTokenCreateRequestProcessorEnum,
  DepositoryAccountSubtype,
  CountryCode,
  Products
} from 'plaid';

let basePath = null;

switch(process.env['NEXT_PLAID_ENVIRONMENT']) {
  case 'development':
    basePath = PlaidEnvironments.development;
    break;
  case 'production':
    basePath = PlaidEnvironments.production;
    break;
  case 'sandbox':
  default:
    basePath = PlaidEnvironments.sandbox;
    break;
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
    products: [Products.Auth],
    country_codes: [CountryCode.Us],
    language: 'en',
    account_filters: {
      depository: {
        account_subtypes: [
          DepositoryAccountSubtype.Checking,
          DepositoryAccountSubtype.Savings
        ]
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
    processor: ProcessorTokenCreateRequestProcessorEnum.Marqeta
  }

  return plaidClient.processorTokenCreate(request);
}