'use client';

import { askFeedback } from '@/api';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import FeedbackLoading from '@/components/writing/feedback-loading';

export default function WritingNew() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleOnClick() {
    if (content.length < 50) {
      return;
    }

    setIsLoading(true);
    const token = getCookie('ACCESS_TOKEN') as string;
    const data = await askFeedback(token, content);
    router.push(`/writing/${data.id}`);
    setIsLoading(false);
  }

  const isButtonDisabled = isLoading || content.length < 1;

  return (
    <>
      <h1 className="mt-12 text-3xl font-bold">새 글쓰기</h1>
      <div className="mt-10 w-full">
        <TextareaAutosize
          className="w-full resize-none border px-4 py-3 outline-none"
          placeholder="글을 작성해 주세요"
          autoComplete="off"
          autoFocus={true}
          spellCheck={false}
          minRows={12}
          maxLength={3000}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="text-right">{content.length}/3000자</div>
      </div>
      <button
        className={`mt-5 bg-violet-100 py-3 font-semibold text-violet-600 outline-none transition-all ${isButtonDisabled ? 'opacity-50' : 'hover:bg-violet-200'}`}
        onClick={handleOnClick}
        disabled={isButtonDisabled}
      >
        AI 피드백 받기
      </button>
      {isLoading && <FeedbackLoading />}
    </>
  );
}
