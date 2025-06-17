import axios from "axios";
import Hub from "./hub";
import { cookies } from 'next/headers'
import createHubPageFactory from "../main/factories/pages/create-hub-page-factory";
import { GetUserCompanies } from "../domain/features/get-user-companies";
import { CompanyModel } from "../domain/models/company-model";

type Props = {
  data: CompanyModel[]
}

const Companies = ({ data }: Props) => {
  return (
    <ul>
      {data.map((c, i) => 
        <ul data-id={c.id} key={i}>
          <span>{c.name}</span>
        </ul>)}
    </ul>
  )
}

export async function HubPage (request: Request, apiGetUserCompanies: GetUserCompanies) {
  const cookieStore = await cookies()
  const cookie: any = cookieStore.get('session')?.value || null
  const { token } = JSON.parse(Buffer.from(cookie, 'base64').toString('utf-8'))
  try {
    const response = await axios.request({ method: 'POST', url: 'http://127.0.0.1:5050/api/auth/validate', data: { token } })
    const data = await apiGetUserCompanies.getByAuthId(response.data.authId)
    return (
      <Hub companies={<Companies data={data}/>}/>
    )
  } catch(error) {
    console.log(error)
    throw error
  }
 
}

export default await createHubPageFactory(HubPage)