export interface HttpClient {
  request <R>(params: HttpClient.Params): Promise<HttpClient.Response<R>>
}

export namespace HttpClient {
  export enum ContentType {
    JSON = 'application/json'
  }

  export enum Method {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT'
  }

  export type Response<R> = {
    status: number
    data: R & { error: string }
  }

  export type Params = {
    method: Method
    url: string
    includedCredential: boolean
    data?: any
    headers?: {
      authorization?: string
      contentType?: ContentType
    }
  }
}