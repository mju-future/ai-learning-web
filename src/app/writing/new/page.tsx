'use client';

import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function WritingNew() {
  const [text, setText] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  return (
    <>
      <h1 className="mt-12 text-3xl font-bold">새 글쓰기</h1>
      <div className="mt-10 w-full">
        <TextareaAutosize
          className="w-full resize-none border px-4 py-3 outline-none"
          placeholder="글을 작성해 주세요."
          autoComplete="off"
          autoFocus={true}
          spellCheck={false}
          minRows={12}
          maxLength={3000}
          value={text}
          onChange={handleChange}
        />
        <div className="text-right">{text.length}/3000자</div>
      </div>
      <button className="mt-5 bg-violet-100 py-3 font-semibold text-violet-600 outline-none transition-colors hover:bg-violet-200">
        AI 피드백 받기
      </button>
    </>
  );
}
