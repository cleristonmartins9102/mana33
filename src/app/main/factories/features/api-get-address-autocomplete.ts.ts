import { ApiGetAddressAutocomplete } from "@/app/data/features/api-get-address-autocomplete";
import { GetAutocomplete } from "@/app/domain/features/get-autocomplete";
import { AxiosAdapter } from "@/app/infra/adapters/http-client";

export const apiGetAddressAutocompleteFactory = (): GetAutocomplete => {
  const httpClient = new AxiosAdapter()
  return new ApiGetAddressAutocomplete(httpClient)
}