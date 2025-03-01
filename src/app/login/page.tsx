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
    const token = await login(loginData);
    setCookie('ACCESS_TOKEN', token, {
      maxAge: 60 * 60 * 24,
      path: '/',
      secure: true,
    });
    router.push('/');
    router.refresh();
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
      <button className="mt-10 bg-violet-200 py-3.5 font-semibold text-violet-600 outline-none transition-colors hover:bg-violet-300 focus:bg-violet-300">
        로그인하기
      </button>
    </form>
  );
}
