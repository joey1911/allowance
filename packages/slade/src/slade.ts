import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import FetchClient from './net/FetchClient';
import type { MarqetaUser } from './types';

type SladeObject = {}

/*
 * TODO: Need to add input validation and cleansing
 * TODO: Build query strings for pagination and filtering
 * TODO: Need to clean up the code, not DRY
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
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  Slade.getUser = async function getUser(userToken: string) {
    try {
      const data = await this.HttpClient.makeRequest(`users/${userToken}`, 'get');

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  Slade.updateUser = async function updateUser(userToken: string, userData: MarqetaUser) {
    try {
      const data = await this.HttpClient.makeRequest(`users/${userToken}`, 'put', userData);

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  /**
   * Get user's SSN
   * @param token string
   * @returns Promise
   */
  Slade.getIdentificationNumber = async function getIdentificationNumber(userToken: string) {
    try {
      const data = await this.HttpClient.makeRequest(`users/${userToken}/ssn`, 'get');

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  Slade.listChildAccounts = async function listChildAccounts(parentToken: string) {
    try {
      const data = await this.HttpClient.makeRequest(`users/${parentToken}/children`, 'get');

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  Slade.listUsers = async function listUsers() {
    try {
      const data = await this.HttpClient.makeRequest('users', 'get');

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
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
      const data = await this.HttpClient.makeRequest('users/auth/clientaccesstoken', 'post', {
        card_token: cardToken
      });

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
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
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  Slade.getKycVerificationResults = async function getKycVerificationResults(userToken: string) {
    try {
      const data = await this.HttpClient.makeRequest(`kyc/user/${userToken}`, 'get');

      return {
        status: 'OK',
        data
      };
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
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
      const errorMessage = getErrorMessage(error);
      reportError({ message: errorMessage });

      return {
        status: 'Error',
        message: errorMessage
      };
    }
  };

  return Slade;
};