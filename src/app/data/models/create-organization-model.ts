export class CreateOrganizationModel {
  name!: string
  password!: string
  owner!: {
    firstName: string
    lastName: string
    coutryDialCode: string
    phone: string
    email: string
  }
  company!: {
    fullName: string
    shorName: string
    registerNumber: string
    location?: Location
    email: string
    countryDialCode: string
    phone: string
    quantityStores: number
    industry: string
    store: {
      name: string
      countryDialCode: string
      phone: string
      email: string
      location: {
        address: string
        number: string
        zipCode: string
        countryCode: string
        country: string
        city: string
        coordenates: {
          lng: number
          lat: number
        }
      }
    }
  }
}

export class OrganizationModel {
  id!: string
  name!: string
  createdAt?: Date
  updatedAt?: Date
}