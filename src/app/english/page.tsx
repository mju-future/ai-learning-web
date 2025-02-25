'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CgSearch } from 'react-icons/cg';
import QuizModal from '@/components/english/quiz-modal';
import { QuizType } from '@/types';

export default function English() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizType, setQuizType] = useState<keyof typeof QuizType>('VOCABULARY');
  const router = useRouter();

  function handleOpenModal(event: React.MouseEvent<HTMLButtonElement>) {
    setQuizType(event.currentTarget.value as keyof typeof QuizType);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSubmit(amount: number) {
    router.push(`/english/quiz?type=${quizType}&amount=${amount}`);
  }

  return (
    <>
      <h1 className="mt-12 text-3xl font-bold">영어 학습하기</h1>
      <p className="mt-4 text-neutral-600">AI와 함께 영어 어휘와 문법을 학습해요</p>
      <div className="mt-10 flex w-full flex-col gap-5">
        <div className="w-full border p-6">
          <h2 className="text-xl font-semibold">AI 단어 검색</h2>
          <div className="mt-5 flex items-center border">
            <input
              className="w-full py-2.5 pl-3.5 outline-none"
              type="text"
              autoCapitalize="off"
              autoCorrect="off"
              placeholder="모르는 단어를 입력해 주세요"
            />
            <button className="px-3 transition-opacity hover:opacity-50">
              <CgSearch className="h-6 w-6 opacity-60 drop-shadow-sm" />
            </button>
          </div>
        </div>
        <div className="w-full border p-6 font-semibold">
          <h2 className="text-xl">퀴즈</h2>
          <div className="mt-5 flex gap-4">
            <button
              className="w-full bg-violet-100 py-2.5 text-violet-600 transition-colors hover:bg-violet-200"
              value="VOCABULARY"
              onClick={handleOpenModal}
            >
              어휘 퀴즈
            </button>
            <button
              className="w-full bg-violet-100 py-2.5 text-violet-600 transition-colors hover:bg-violet-200"
              value="GRAMMAR"
              onClick={handleOpenModal}
            >
              문법 퀴즈
            </button>
          </div>
        </div>
      </div>
      <QuizModal
        isOpen={isModalOpen}
        quizType={quizType}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
}
