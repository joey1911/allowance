type HttpMethods = 'get' | 'put' | 'post' | 'delete'
type FetchRequestConfig = {
  method: HttpMethods,
  headers: Headers,
  body: string | null
}

export default class FetchClient {
  baseUrl: string;

  #applicationToken: string;

  #accessToken: string;

  constructor(baseUrl: string, applicationToken: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.#applicationToken = applicationToken;
    this.#accessToken = accessToken;
  }

  public async makeRequest(
    url: string,
    method: HttpMethods,
    body?: object
  ) {
    const userString = Buffer.from(`${this.#applicationToken}:${this.#accessToken}`).toString('base64');
    const requestConfig: FetchRequestConfig = {
      method,
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${userString}`
      }),
      body: null
    }

    let jsonBody: string | boolean = false;

    try {
      jsonBody = JSON.stringify(body);
    } catch (error) {
      // don't need to do anything, but invalid data passed
    }

    if (jsonBody) {
      requestConfig.body = jsonBody;
    }

    const response = await fetch(this.baseUrl + url, requestConfig);

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    // Errors in the 400 range are Allowance errors
    // Errors in the 500 range are Marqeta errors
    // Need to handle errors or other status codes
    return response.statusText;
  }
};