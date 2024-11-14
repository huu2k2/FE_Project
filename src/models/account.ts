import { ProfileModel } from "./profile";
import { RoleModel } from "./role";

export interface AccountModel {
  accountId: string;
  username: string;
  password: string;
  role: RoleModel;
  isActive: boolean;
  profile: ProfileModel;
}

export interface IAccountResponse {
  accountId: string;
  username: string;
  roleId: string | null;
  isActive: boolean;
  createdAt: Date;
}
