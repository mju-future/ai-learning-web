import { LoginRequest, LoginResponse } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function login(loginData: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body as LoginResponse;
}
