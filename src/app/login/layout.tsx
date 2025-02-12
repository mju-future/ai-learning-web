import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
};

export default function Login({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex w-full max-w-screen-sm flex-col justify-center gap-14 px-10">
      <h1 className="text-4xl font-bold">로그인</h1>
      {children}
    </div>
  );
}
