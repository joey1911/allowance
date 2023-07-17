import FetchClient from './net/FetchClient';
import type { MarqetaUser } from './types';

type SladeObject = {
  HttpClient: typeof FetchClient,
  createUser: () => any,
  listUsers: () => any,
  getUser: () => any,
  createJoey: () => any
}

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
      return await this.HttpClient.makeRequest('users', 'post', userData);
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

  Slade.getUser = async function getUser(token: string) {
    try {
      return await this.HttpClient.makeRequest(`users/${token}`, 'get');
    } catch (error) {
      return error;
    }
  };

  Slade.updateUser = async function updateUser(token: string, userData: MarqetaUser) {
    try {
      return await this.HttpClient.makeRequest(`users/${token}`, 'put', userData);
    } catch (error) {
      return error;
    }
  }

  return Slade;
};