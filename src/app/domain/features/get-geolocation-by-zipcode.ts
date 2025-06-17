export interface GetGeolocationByZipCode {
  get (zipcode: string, country: string): Promise<any>
}