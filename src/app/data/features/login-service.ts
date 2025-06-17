import { AxiosAdapter } from "@/app/infra/adapters/http-client";
import { HttpClient } from "@/app/domain/features/request";

export class LoginService {
  async login(username: string, password: string): Promise<any> {
    const axiosAdapter = new AxiosAdapter()
    return await axiosAdapter.request({ method: HttpClient.Method.POST, url: 'http://localhost:5050/api/auth', headers: { 'contentType': HttpClient.ContentType.JSON }, data: { username, password }, includedCredential: true })
  }
}