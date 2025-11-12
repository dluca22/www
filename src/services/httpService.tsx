import axios, { AxiosHeaders, type AxiosInstance } from 'axios'

export interface ApiConfig{
  baseUrl: string,
  apiToken?: string,
  userAuth?: any // later will decide
  headers?: any
}

export interface ApiResponse<T>{
  data:T;
  message: string;
  status: number;
}


export interface ApiError {
  message: string;
  status: number;
  code: number;
}

export type CustomHttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: typeof AxiosHeaders | CustomHttpHeaders;
};

export interface IApiService{
  post<TRequest, TResponse>(
    path: string,
    object: TRequest,
    config?: RequestConfig
  ): Promise<TResponse>;
  // patch<TRequest, TResponse>(
  //   path: string,
  //   object: TRequest
  // ): Promise<TResponse>;
  put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
  get<TResponse>(path: string): Promise<TResponse>;
  delete<TResponse>(path: string): Promise<TResponse>;
}

export class ApiService implements IApiService {
  private _config: any;
  private _appApiToken: string | undefined;
  private defaultTimeout: number = 1000 * 10;

  private _baseUrl: string;
  private _userAuth?: string;

  private headers = {};
  private client!: AxiosInstance;

  constructor(apiConfig: ApiConfig){
    this._config = apiConfig;
    this._baseUrl = apiConfig.baseUrl;
    
    if(apiConfig.apiToken){ this._appApiToken = apiConfig.apiToken }
    if(apiConfig.userAuth){ this._userAuth = apiConfig.userAuth }
    if(apiConfig.headers){ this.headers = apiConfig.headers }

    this.createApiClient();
  }

  // if setup then enable auth interceptors
  get requiresAuth(){
    return this._appApiToken &&  Boolean(this._appApiToken.trim());
  }


  private createApiClient(){
    this.client = axios.create({
      baseURL: this._baseUrl,
      headers: {
        'Content-Type': 'application/json',
        ...this.headers
      },
      timeout: this._config.timeout || this.defaultTimeout
    }) 

    if(this.requiresAuth){
      this.setupInterceptors();
    }
  }

  private setupInterceptors() {
    // Add auth token automatically
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem(this._appApiToken!);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

   async get<TResponse>(url:string, config?: any): Promise<TResponse>
    {
    try {
      const response = await this.client.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<TRequest, TResponse>(url:any, data: any, config: any): Promise<TResponse> {
    try {
      const response = await this.client.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
    try {
      const response = await this.client.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<TResponse>(url:string): Promise<TResponse> {
    try {
      const response = await this.client.post(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
