import { GetUserCompanies } from "@/app/domain/features/get-user-companies";
import { HttpClient } from "@/app/domain/features/request";
import { CompanyModel } from "@/app/domain/models/company-model";

type ApiResponse = CompanyModel[]

export class ApiGetUserCompanies implements GetUserCompanies {
  constructor (private readonly httpClient: HttpClient) {}
  async getByAuthId(authId: string): Promise<ApiResponse> {
    // const apiResponse = await this.httpClient.request<ApiResponse>({ method: HttpClient.Method.POST, url: 'http://localhost:' })
    const apiResponse = { status: 200, data: [ { id: 1, name: 'Frangolino Lanches' }, { id: 2, name: 'Franburguer' }, { id: 2, name: 'Biden' } ]} as any
    if (apiResponse.status === 200 && !apiResponse.data.error) {
      return apiResponse.data
    }
    throw new Error('')
  }
}