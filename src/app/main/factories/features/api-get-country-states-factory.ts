import { ApiCountryStates } from "@/app/data/features/api-get-states-of-country";
import { GetCountryStates } from "@/app/domain/features/get-country-states";
import { AxiosAdapter } from "@/app/infra/adapters/http-client";

export const apiGetCountryStatesFactory = (): GetCountryStates => {
  const httpClient = new AxiosAdapter()
  return new ApiCountryStates(httpClient)
}