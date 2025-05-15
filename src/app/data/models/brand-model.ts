import { CoordenatesModel, LocationModel } from "./location-model"

export type BrandModel = {
  id: string
  razao_social: string
  email: string
  nome_fantasia: string
  cnpj: string
  location: LocationModel
}

