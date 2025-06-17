import { ApiGetGeolocationByZipcode } from "@/app/data/features/api-get-geolocation-by-zipcode";
import { GetStateCities } from "@/app/domain/features/get-state-cities";
import { AxiosAdapter } from "@/app/infra/adapters/http-client";

export const apiGetGeolocationByZipcodeFactory = (): GetStateCities => {
  const httpClient = new AxiosAdapter()
  return new ApiGetGeolocationByZipcode(httpClient)
}