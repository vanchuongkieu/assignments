export interface UserDto {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  status: boolean;
  password: string;
}

export type LoginResponse = {
  refreshToken: string;
  accessToken: string;
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    status: boolean;
  } | null;
};
