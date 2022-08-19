import Axios, { AxiosInstance } from "axios";
import _ from 'lodash';
import { OrderBy } from "../proto/cosmos/tx/v1beta1/service";

export type APIParams = Record<string, string | number | null | undefined | boolean | Array<string>>;

export interface PaginationOptions {
  "pagination.limit": string;
  "pagination.offset": string;
  "pagination.key": string;
  "pagination.count_total": "true" | "false";
  "pagination.reverse": "true" | "false";
  order_by: keyof typeof OrderBy;
}

export interface Pagination {
  next_key: string | null;
  total: number;
}

export class APIRequester {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = Axios.create({
      baseURL,
      headers: {
        Accept: "application/json",
      },
      timeout: 60000,
    });
  }

  public async get<T>(
    endpoint: string,
    params: URLSearchParams | APIParams = {}
  ): Promise<T> {
    return this.axios.get(endpoint, { params }).then((d) => toCamelCase(d.data));
  }

  public async post<T>(endpoint: string, data?: APIParams): Promise<T> {
    return this.axios.post(endpoint, data).then((d) => toCamelCase(d.data));
  }
}

function toCamelCase (obj: any) {
  let rtn = obj
  if(!rtn) {
    return rtn
  } else if (typeof (obj) === 'object') {
    if (obj instanceof Array) {
      rtn = obj.map(toCamelCase)
    } else {
      rtn = {}
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const newKey = key.replace(/(_\w)/g, k => k[1].toUpperCase())
          rtn[newKey] = toCamelCase(obj[key])
        }
      }
    }
  }
  return rtn
}
