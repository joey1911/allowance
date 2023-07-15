type httpMethods = 'get' | 'put' | 'post' | 'delete'

export default class FetchClient {
  baseUrl: string;

  #applicationToken: string;

  #accessToken: string;

  constructor(baseUrl: string, applicationToken: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.#applicationToken = applicationToken;
    this.#accessToken = accessToken;
  }

  public async makeRequest(url: string, method: httpMethods) {
    const userString = Buffer.from(`${this.#applicationToken}:${this.#accessToken}`).toString('base64');
    const response = await fetch(this.baseUrl + url, {
      method,
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${userString}`
      })
    });

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    // Errors in the 400 range are Allowance errors
    // Errors in the 500 range are Marqeta errors
    // Need to handle errors or other status codes
    return response.statusText;
  }
};