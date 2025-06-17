import { ApiGetUserCompanies } from "@/app/data/features/api-get-user-companies";
import { GetUserCompanies } from "@/app/domain/features/get-user-companies";
import { AxiosAdapter } from "@/app/infra/adapters/http-client";

export const apiGetUserCompaniesFactory = (): GetUserCompanies => {
  const httpClient = new AxiosAdapter()
  return new ApiGetUserCompanies(httpClient)
}