'use client';

import { useState } from 'react';

interface UserInputProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

export default function UserInput({ onSendMessage, isLoading }: UserInputProps) {
  const [input, setInput] = useState('');

  function handleSubmit() {
    if (!input.trim()) return;

    onSendMessage(input);
    setInput('');
  }

  return (
    <div className="mt-10 w-full border bg-neutral-50">
      <textarea
        className="mt-3 w-full resize-none bg-neutral-50 px-4 outline-none"
        rows={5}
        spellCheck={false}
        autoFocus={true}
        autoCorrect="off"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex w-full justify-end">
        <button
          className={`px-4 pb-2 pt-1 font-semibold text-violet-600 transition-opacity hover:opacity-50 ${isLoading && 'cursor-not-allowed opacity-50'}`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          전송
        </button>
      </div>
    </div>
  );
}
