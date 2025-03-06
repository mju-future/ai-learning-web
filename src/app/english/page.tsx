'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CgSearch } from 'react-icons/cg';
import QuizModal from '@/components/english/quiz-modal';
import SearchModal from '@/components/english/search-modal';
import { QuizType, DetailType, WordInfo } from '@/types';
import { fetchWordsInfo } from '@/api';

export default function English() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [quizType, setQuizType] = useState<keyof typeof QuizType>('VOCABULARY');
  const [wordInfo, setWordInfo] = useState<WordInfo | null>(null);
  const [word, setWord] = useState('');

  const router = useRouter();

  function handleOpenModal(event: React.MouseEvent<HTMLButtonElement>) {
    setQuizType(event.currentTarget.value as keyof typeof QuizType);

    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handelCloseSearchModal() {
    setIsSearchModalOpen(false);
  }

  const isKorean = (str: string) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str);

  async function handelSeachWord() {
    if (!word.trim() || isKorean(word)) {
      alert('영어 단어만 입력해 주세요!');
      return;
    }
    try {
      const token =
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('ACCESS_TOKEN='))
          ?.split('=')[1] || null;
      if (!token) {
        console.error('토큰이 없습니다.');
        alert('로그인이 필요합니다.');
        return;
      }

      const data = await fetchWordsInfo(word, token);

      if (!data) {
        console.error('검색된 단어가 없습니다.');
        alert('해당 단어를 찾을 수 없습니다.');
        return;
      }

      setWordInfo(data);
      setIsSearchModalOpen(true);
    } catch (error) {
      console.error('단어 검색 실패:', error);
      alert('단어를 가져오는데 실패했습니다.');
    }
  }

  function handleSubmit(amount: number, detailType: keyof typeof DetailType) {
    router.push(`/english/quiz?type=${quizType}&detailType=${detailType}&amount=${amount}`);
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
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className="px-3 transition-opacity hover:opacity-50" onClick={handelSeachWord}>
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
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={handelCloseSearchModal}
        wordInfo={wordInfo}
      />
    </>
  );
}
