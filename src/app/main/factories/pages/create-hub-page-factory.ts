import { HubPage } from "@/app/hub/page"
import { apiGetUserCompaniesFactory } from "../features/api-get-user-companies-factory"



export default async function createHubPageFactory(component: typeof HubPage): Promise<typeof HubPage> {
  const apiGetUserCompanies = apiGetUserCompaniesFactory()
  return (request: Request) => {
    return component(request, apiGetUserCompanies)
  }
}