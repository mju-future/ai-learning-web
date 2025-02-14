'use client';

import TextareaAutosize from 'react-textarea-autosize';

export default function WritingNew() {
  return (
    <>
      <h1 className="mt-12 text-3xl font-bold">새 글쓰기</h1>
      <div className="mt-10 w-full">
        <TextareaAutosize
          className="w-full resize-none border p-4 outline-none"
          placeholder="글을 작성해 주세요."
          autoComplete="off"
          autoFocus={true}
          spellCheck={false}
          minRows={12}
        />
      </div>
      <button className="mt-5 bg-violet-100 py-3 font-semibold text-violet-600 transition-colors hover:bg-violet-200">
        AI 피드백 받기
      </button>
    </>
  );
}
