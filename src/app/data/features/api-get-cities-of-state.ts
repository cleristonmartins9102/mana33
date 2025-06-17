import { HttpClient } from "@/app/domain/features/request";
import { GetStateCities } from "@/app/domain/features/get-state-cities";

type ApiResponse = {
  data: string[]
}

export class ApiGetCitiesOfState implements GetStateCities {
  constructor (private readonly httpClient: HttpClient) {}
  async get(countryName: string, stateName: string): Promise<string[]> {
    const apiResponse = await this.httpClient.request<ApiResponse>({ method: HttpClient.Method.POST, url: 'https://countriesnow.space/api/v0.1/countries/state/cities', data: { country: countryName, state: stateName }, includedCredential: false })
    if (apiResponse.status === 200 && !apiResponse.data.error) {
      return apiResponse.data.data
    }
    throw new Error('')
  }
}