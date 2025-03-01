'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">페이지를 찾을 수 없습니다.</h1>
      <button
        className="mt-10 bg-violet-100 px-4 py-2 font-semibold text-violet-600 outline-none transition-colors hover:bg-violet-200"
        onClick={() => router.push('/')}
      >
        홈으로 이동
      </button>
    </div>
  );
}
