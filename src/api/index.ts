import { LoginRequest } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function login(loginData: LoginRequest) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error();
  }
}
