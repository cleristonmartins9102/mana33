export type LocationModel = {
  address: string
  number: string
  complement: string
  naiborhood: string
  state: string
  city: string
  zip_code: string
  coordenates: CoordenatesModel
}

export type CoordenatesModel = {
  latitude: string
  longitude: string
}