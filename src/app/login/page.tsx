'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginData } from '@/types';
import InputField from '@/components/common/input-field';

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    loginId: '',
    password: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="mb-32 flex flex-col gap-6" onSubmit={handleSubmit}>
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
      <button className="mt-10 bg-violet-600 py-3.5 font-semibold text-white outline-none transition-colors hover:bg-violet-800 focus:bg-violet-800">
        로그인하기
      </button>
    </form>
  );
}
