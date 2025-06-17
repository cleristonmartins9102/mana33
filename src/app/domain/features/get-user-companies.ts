import { CompanyModel } from "../models/company-model";

export interface GetUserCompanies {
  getByAuthId(userId: string): Promise<CompanyModel[]>
}