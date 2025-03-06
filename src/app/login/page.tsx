'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import InputField from '@/components/common/input-field';
import { login } from '@/api';
import { LoginData } from '@/types';

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    loginId: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!loginData.loginId || !loginData.password) {
      setError('아이디와 비밀번호를 입력해 주세요.');
      return;
    }

    try {
      const token = await login(loginData);
      setCookie('ACCESS_TOKEN', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        secure: true,
        sameSite: 'none',
      });
      router.push('/');
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  }

  return (
    <form className="mb-20 flex flex-col gap-6" onSubmit={handleSubmit}>
      <InputField
        label="아이디"
        type="text"
        name="loginId"
        value={loginData.loginId}
        onChange={handleChange}
      />
      <InputField
        label="비밀번호"
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
      />
      <div className="h-5">{error && <p className="text-base text-red-500">{error}</p>}</div>
      <button className="mt-5 bg-violet-200 py-3.5 font-semibold text-violet-600 outline-none transition-colors hover:bg-violet-300 focus:bg-violet-300">
        로그인하기
      </button>
    </form>
  );
}
