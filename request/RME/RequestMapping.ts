import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestConfig, RequestMethods } from "./IMapper";

type RouteMap<T extends RequestConfig> = {
  [K in keyof T]: RequestMethods;
};

export default class RequestMapper<T extends RequestConfig> {
  private config: T;
  private api: AxiosInstance;

  constructor(config: T, apiInstance: AxiosInstance) {
    this.config = config;
    this.api = apiInstance;
  }

  private async makeRequest(
    method: "GET" | "POST" | "PUT" | "DELETE",
    routeName: keyof T,
    { paramsBody, paramsQueries, token }: { paramsBody?: any; paramsQueries?: any; token?: string } = {}
  ): Promise<any> {
    const route = this.config[routeName];
    if (!route) {
      throw new Error(`Route "${String(routeName)}" not found in configuration.`);
    }

    const url = route.endpoint;
    const axiosConfig: AxiosRequestConfig = {
      method,
      url,
      ...(paramsQueries && { params: paramsQueries }),
      ...(paramsBody && {data: paramsBody} ),
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };
    return this.api.request(axiosConfig);
  }

  get route(): RouteMap<T> {
    return new Proxy(
      {},
      {
        get: (_, routeName: string) => ({
          get: (paramsQueries?: any) =>
            this.makeRequest("GET", routeName as keyof T, { paramsQueries }),
          post: (paramsBody?: any) =>
            this.makeRequest("POST", routeName as keyof T, { paramsBody }),
          put: (paramsBody?: any) =>
            this.makeRequest("PUT", routeName as keyof T, { paramsBody }),
          delete: (paramsQueries?: any) =>
            this.makeRequest("DELETE", routeName as keyof T, { paramsQueries }),
        }),
      }
    ) as RouteMap<T>;
  }
}
