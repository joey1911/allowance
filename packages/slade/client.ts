type httpMethods = 'get' | 'put' | 'post' | 'delete'

export class Client {
  baseUrl: string;
  #applicationToken: string;
  #accessToken: string;

  constructor(baseUrl: string, applicationToken: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.#applicationToken = applicationToken;
    this.#accessToken = accessToken;
  }

  public async makeRequest(url: string, method: httpMethods) {
    console.log(url);
    /*
    const response = await fetch(this.baseUrl + url, {
      method: method,
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(this.#applicationToken + ':' + this.#accessToken).toString('base64')
      })
    });

    if (response.status === 200) {
      return response.json();
    }  else {
      // Need to handle errors or other status codes
    }
    */
  }
}