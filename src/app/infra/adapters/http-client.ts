import { HttpClient } from "@/app/domain/features/request";
import axios, { AxiosError } from "axios";


export class AxiosAdapter implements HttpClient {
  async request<R>(params: HttpClient.Params): Promise<HttpClient.Response<R>> {
    let response: HttpClient.Response<R>
    try {
      let requestParams: any = { method: params.method, url: params.url, withCredentials: params.includedCredential }
      if (params.headers) {
        requestParams = { ...requestParams, headers: params.headers }
      }
      if (params.data) {
        requestParams = { ...requestParams, data: params.data }
      }
      const httpResponse = await axios.request(requestParams)
      response = { status: httpResponse.status, data: httpResponse.data }
    } catch (error) {
      response = { status: (error as AxiosError).status!, data: (error as AxiosError).response?.data! as any }
    }
    return response

  }
}