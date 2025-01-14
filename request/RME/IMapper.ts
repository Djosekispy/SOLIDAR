type RequestConfig = {
    [routeName: string]: {
      endpoint: string;
    };
  };
  
  type RequestMethods = {
    get: (paramsQueries?: any) => Promise<any>;
    post: (paramsBody?: any) => Promise<any>;
    put: (paramsBody?: any) => Promise<any>;
    delete: (paramsQueries?: any) => Promise<any>;
  };
  

  export {
    RequestConfig,
    RequestMethods
  }