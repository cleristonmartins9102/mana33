import { ApiGetCitiesOfState } from "@/app/data/features/api-get-cities-of-state";
import { GetStateCities } from "@/app/domain/features/get-state-cities";
import { AxiosAdapter } from "@/app/infra/adapters/http-client";

export const apiGetCitiesOfStateFactory = (): GetStateCities => {
  const httpClient = new AxiosAdapter()
  return new ApiGetCitiesOfState(httpClient)
}