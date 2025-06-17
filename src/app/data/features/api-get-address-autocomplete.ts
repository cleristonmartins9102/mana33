import { HttpClient } from "@/app/domain/features/request";
import { GetAutocomplete } from "@/app/domain/features/get-autocomplete";

type ApiResponse = {
  data: GetAutocomplete.Result
}

export class ApiGetAddressAutocomplete implements GetAutocomplete {
  constructor (private readonly httpClient: HttpClient) {}
  async get(reference: string): Promise<GetAutocomplete.Result> {
    const url = encodeURIComponent(`http://localhost:5053/api/geolocation/autocomplete?reference=${reference}`)
    const apiResponse = await this.httpClient.request<ApiResponse>({ method: HttpClient.Method.GET, url, includedCredential: false })
    if (apiResponse.status === 200 && !apiResponse.data.error) {
      return apiResponse.data.data
    }
    throw new Error('')
  }
} 