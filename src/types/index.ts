export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  type: string;
  accessToken: string;
}
