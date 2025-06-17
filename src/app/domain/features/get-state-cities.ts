import { CityModel } from "@/app/data/models/city-model";

export interface GetStateCities {
  get (countryName: string, stateName: string): Promise<string[]>
}