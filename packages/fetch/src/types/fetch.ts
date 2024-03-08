import { AxiosRequestConfig } from 'axios'

export interface AxiosInstance {
  <T = any>(config: AxiosRequestConfig): Promise<T>
  request<T = any>(config: AxiosRequestConfig): Promise<T>
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  interceptors: any
}

type ResponseMsg = string | null | undefined

export interface Result<T = undefined> {
  code: number
  data: T
  msg: ResponseMsg
}
export interface Results<T = undefined> {
  code: number
  roles: T
  msg: ResponseMsg
}

export type ListResult<T> = Result<T[]>

export interface Authentication {
  username: string
  password: string
}
