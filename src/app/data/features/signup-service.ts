import axios from "axios";
import { CreateOrganizationModel } from "@/app/data/models/create-organization-model"

export class SignupService {
  async signup (form: CreateOrganizationModel): Promise<any> {
    try {
      await axios.request({ method: 'POST', url: 'http://127.0.0.1:5051/api/signup', data: form})
    } catch(error) {
      console.log(error)
    }
  }
}