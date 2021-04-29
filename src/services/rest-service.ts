import axios from "axios";

import { apiUrl } from "../assets/appConfig.json";

export class RestService<E> {
  readonly url: string;
  constructor(resource: string) {
    this.url = apiUrl.concat("/", resource);
  }

  public readonly get = (): Promise<E[]> => axios.get<E[]>(this.url).then(resp => resp.data);
  public readonly getOne = (id: string): Promise<E> => axios.get<E>(this.url.concat("/", id)).then(resp => resp.data);
}
