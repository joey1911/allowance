import FetchClient from './net/FetchClient';

type SladeObject = {
  HttpClient: typeof FetchClient,
  getUsers: () => any
}

export default function createSlade(
  baseUrl: string,
  applicationToken: string,
  accessToken: string
) {
  Slade.HttpClient = new FetchClient(baseUrl, applicationToken, accessToken);

  function Slade(
    this: SladeObject,
    config: Record<string, unknown> = {}
  ): void {
    if (!(this instanceof Slade)) {
      return new (Slade as any)(config);
    }
  }

  Slade.getUsers = async function getUsers() {
    try {
      return await this.HttpClient.makeRequest('cardproducts?sort_by=-lastModifiedTime', 'get');
    } catch (error) {
      return error;
    }
  }

  return Slade;
};