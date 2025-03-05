import {
  WritingPractice,
  WritingPracticeChat,
  AiFeedback,
  QuizType,
  Quiz,
  LoginData,
  DetailType,
  QuizResult,
} from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function login(loginData: LoginData): Promise<{ accessToken: string }> {
  const { loginId, password } = loginData;
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ loginId, password }),
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body.accessToken;
}

export async function fetchWritingPractices(token: string): Promise<WritingPractice[]> {
  const response = await fetch(`${BASE_URL}/writings`, {
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

export async function askFeedback(token: string, content: string): Promise<AiFeedback> {
  const response = await fetch(`${BASE_URL}/writings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
  const response = await fetch(`${BASE_URL}/writings/${id}/chat`, {
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
  content: string,
  token: string
): Promise<WritingPracticeChat> {
  const response = await fetch(`${BASE_URL}/writings/${id}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

export async function fetchRandomQuizzes(
  type: keyof typeof QuizType,
  detailType: keyof typeof DetailType,
  amount: number,
  token: string
): Promise<Quiz[]> {
  const response = await fetch(
    `${BASE_URL}/quizzes?type=${type}&detailType=${detailType}&amount=${amount}`,
    {
      method: 'GET',
      headers: {
        Cookie: `ACCESS_TOKEN=${token}`,
      },
      credentials: 'include',
      cache: 'no-cache',
    }
  );

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();

  return data.body;
}

export async function completeQuiz(quizResults: QuizResult[], token: string): Promise<number[]> {
  const response = await fetch(`${BASE_URL}/quizzes/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ quizResults }),
  });

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data.body;
}
