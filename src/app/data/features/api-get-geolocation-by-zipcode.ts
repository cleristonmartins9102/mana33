import { HttpClient } from "@/app/domain/features/request";
import { GetGeolocationByZipCode } from "@/app/domain/features/get-geolocation-by-zipcode";

type ApiResponse = {
  data: string[]
}

export class ApiGetGeolocationByZipcode implements GetGeolocationByZipCode {
  constructor (private readonly httpClient: HttpClient) {}
  async get(zipcode: string, country: string): Promise<any> {
    const apiResponse = await this.httpClient.request<ApiResponse>({ method: HttpClient.Method.POST, url: 'http://localhost:5053/api/geolocation/', data: { zipCode: zipcode, country: 'Brazil' }, headers: { contentType: HttpClient.ContentType.JSON }, includedCredential: false })
    console.log(apiResponse)
    if (apiResponse.status === 200 && !apiResponse.data.error) {
      return apiResponse.data.data
    }
    throw new Error('')
  }
} 