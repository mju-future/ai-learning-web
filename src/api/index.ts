import { AskFeedbackResponse, LoginRequest, WritingPractice, WritingPracticeChat } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function login(loginData: LoginRequest) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    throw new Error();
  }
}

export async function fetchWritingPractices(token: string): Promise<WritingPractice[]> {
  const response = await fetch(`${BASE_URL}/writing-practices`, {
    method: 'GET',
    headers: {
      Cookie: `ACCESS_TOKEN=${token}`,
    },
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body;
}

export async function askFeedback(token: string, content: string): Promise<AskFeedbackResponse> {
  const response = await fetch(`${BASE_URL}/writing-practices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `ACCESS_TOKEN=${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body;
}

export async function fetchWritingPracticeChats(
  id: string,
  token: string
): Promise<WritingPracticeChat[]> {
  const response = await fetch(`${BASE_URL}/writing-practices/${id}/chat`, {
    method: 'GET',
    headers: {
      Cookie: `ACCESS_TOKEN=${token}`,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body;
}

export async function chat(
  id: string,
  token: string,
  content: string
): Promise<WritingPracticeChat> {
  const response = await fetch(`${BASE_URL}/writing-practices/${id}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `ACCESS_TOKEN=${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body;
}
