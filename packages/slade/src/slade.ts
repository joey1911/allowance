import FetchClient from './net/FetchClient';
import type { MarqetaUser } from './types';

type SladeObject = {}

/*
 * TODO: Need to add input validation and cleansing
 * TODO: Build query strings for pagination and filtering
 */

export default function createSlade(
  baseUrl: string,
  applicationToken: string,
  accessToken: string
) {
  function Slade(
    this: SladeObject,
    config: Record<string, unknown> = {}
  ): void {
    if (!(this instanceof Slade)) {
      return new (Slade as any)(config);
    }
  };

  Slade.HttpClient = new FetchClient(baseUrl, applicationToken, accessToken);

  Slade.createUser = async function createUser(userData: MarqetaUser) {
    try {
      const data = await this.HttpClient.makeRequest('users', 'post', userData);

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      return {
        status: 'Error',
        message: error.message
      }
    }
  };

  Slade.getUser = async function getUser(userToken: string) {
    try {
      return await this.HttpClient.makeRequest(`users/${userToken}`, 'get');
    } catch (error) {
      return error;
    }
  };

  Slade.updateUser = async function updateUser(userToken: string, userData: MarqetaUser) {
    try {
      return await this.HttpClient.makeRequest(`users/${userToken}`, 'put', userData);
    } catch (error) {
      return error;
    }
  };

  /**
   * Get user's SSN
   * @param token string
   * @returns Promise
   */
  Slade.getIdentificationNumber = async function getIdentificationNumber(userToken: string) {
    try {
      return await this.HttpClient.makeRequest(`users/${userToken}/ssn`, 'get');
    } catch (error) {
      return error;
    }
  };

  Slade.listChildAccounts = async function listChildAccounts(parentToken: string) {
    try {
      return await this.HttpClient.makeRequest(`users/${parentToken}/children`, 'get');
    } catch (error) {
      return error;
    }
  };

  Slade.listUsers = async function listUsers() {
    try {
      return await this.HttpClient.makeRequest('users', 'get');
    } catch (error) {
      return error;
    }
  };

  /**
   * Get a single-use client access token.
   * Required to access virtual card's sensitive data using marqeta.js
   * @param cardToken string
   * @returns JSON Client Access Token response
   */
  Slade.createClientAccessToken = async function createClientAccessToken(cardToken: string) {
    try {
      return await this.HttpClient.makeRequest('users/auth/clientaccesstoken', 'post', {
        card_token: cardToken
      });
    } catch (error) {
      return error;
    }
  };

  Slade.performKycVerification = async function performKycVerification(userToken: string) {
    try {
      const data = await this.HttpClient.makeRequest('kyc', 'post', {
        user_token: userToken
      });

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      return {
        status: 'Error',
        message: error.message
      };
    }
  };

  Slade.getKycVerificationResults = async function getKycVerificationResults(userToken: string) {
    try {
      return await this.HttpClient.makeRequest(`kyc/user/${userToken}`, 'get');
    } catch (error) {
      return error;
    }
  };

  Slade.createFundingSourceViaPartner = async function createFundingSourceViaPartner(
    userToken: string,
    partnerReferenceToken: string
  ) {
    try {
      const data = await this.HttpClient.makeRequest('fundingsources/ach/partner', 'post', {
        user_token: userToken,
        partner_account_link_reference_token: partnerReferenceToken,
        partner: 'PLAID'
      });

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      console.log(error);
      return {
        status: 'Error',
        message: error.message
      };
    }
  };

  return Slade;
};