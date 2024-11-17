export interface LocginModel {
  username: string;
  password: string;
}

export interface StaffLoginDto extends LocginModel {}

export interface DataToken {
  token: string;
  refreshToken: string;
}
export interface ResStaffLoginDto {
  message: string;
  data: DataToken;
}
