import { GetCountryStates } from "@/app/domain/features/get-country-states";
import { HttpClient } from "@/app/domain/features/request";
import { StateModel } from "../models/state-model";

type ApiResponse = {
  data: {
    states: {
      name: string,
      state_code: string
    }[]
  }
}

export class ApiCountryStates implements GetCountryStates {
  constructor (private readonly httpClient: HttpClient) {}
  async get(countryName: string): Promise<StateModel[]> {
    const apiResponse = await this.httpClient.request<ApiResponse>({ method: HttpClient.Method.POST, url: 'https://countriesnow.space/api/v0.1/countries/states', data: { country: countryName }, includedCredential: false })
    if (apiResponse.status === 200 && !apiResponse.data.error) {
      return apiResponse.data.data.states.map(state => ({ name: state.name, code: state.state_code }))
    }
    throw new Error('')
  }
}