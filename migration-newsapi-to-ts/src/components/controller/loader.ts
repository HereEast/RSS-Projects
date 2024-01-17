import { Data, Options, RespObject } from "../../types/types";
import { HttpStatusCode } from "../../types/enums";

class Loader {
  private baseLink;
  private options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp({ endpoint, options }: RespObject, callback: (data: Data) => void): void {
    this.load("GET", endpoint, callback, options ?? {});
  }

  errorHandler<T extends Response>(res: T): T {
    if (!res.ok) {
      if (res.status === HttpStatusCode.Unauthorized || res.status === HttpStatusCode.NotFound) {
        const message = `Sorry, but there is ${res.status} error: ${res.statusText}`;
        throw Error(message);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (data: Data) => void, options: Options): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: Data) => callback(data))
      .catch((err: string | null) => console.error(err));
  }
}

export default Loader;
