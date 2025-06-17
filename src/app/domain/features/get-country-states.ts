import { StateModel } from "@/app/data/models/state-model";

export interface GetCountryStates {
  get (countryName: string): Promise<StateModel[]>
}