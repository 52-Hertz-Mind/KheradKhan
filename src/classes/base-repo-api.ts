import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../models/response-api.model.ts';

class BaseRepoAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/', // Replace with your backend base URL
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add interceptors if needed
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
      }
    );
  }

  private async handleResponse<T>(
    promise: Promise<ApiResponse<T>>
  ): Promise<T> {
    const response = await promise;
    if (response.type === 'SUCCESS') {
      return response.data || null; // If `data` is undefined, return `null`
    }
    throw new Error(response.message?.key || 'Unexpected API failure');
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T | null> {
    const config: AxiosRequestConfig = params ? { params } : {};
    return this.handleResponse(
      this.instance.get<ApiResponse<T>>(url, config).then((res) => res.data)
    );
  }

  async post<T>(
    url: string,
    body?: Record<string, any>,
    params?: Record<string, any>
  ): Promise<T> {
    const config: AxiosRequestConfig = params ? { params } : {};
    return this.handleResponse(
      this.instance
        .post<ApiResponse<T>>(url, body || {}, config)
        .then((res) => res.data)
    );
  }

  async patch<T>(
    url: string,
    body?: Record<string, any>,
    params?: Record<string, any>
  ): Promise<T> {
    const config: AxiosRequestConfig = params ? { params } : {};
    return this.handleResponse(
      this.instance
        .patch<ApiResponse<T>>(url, body || {}, config)
        .then((res) => res.data)
    );
  }

  async delete<T>(url: string, params?: Record<string, any>): Promise<T> {
    const config: AxiosRequestConfig = params ? { params } : {};
    return this.handleResponse(
      this.instance.delete<ApiResponse<T>>(url, config).then((res) => res.data)
    );
  }
}

export const baseRepoAPI = new BaseRepoAPI();
