'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { LoginData } from '@/types'
import InputField from '@/components/common/input-field'

export default function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    studentNumber: '',
    password: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="flex w-full max-w-screen-sm flex-col justify-center gap-14 px-10">
      <h1 className="text-4xl font-bold">로그인</h1>
      <form className="mb-20 flex flex-col gap-6" onSubmit={handleSubmit}>
        <InputField
          label="학번"
          type="text"
          name="studentNumber"
          value={loginData.studentNumber}
          onChange={handleChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button className="mt-10 bg-indigo-600 py-3.5 font-semibold text-white outline-none transition-colors hover:bg-indigo-700 focus:bg-indigo-700">
          로그인하기
        </button>
      </form>
    </div>
  )
}
