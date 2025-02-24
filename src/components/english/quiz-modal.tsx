'use client';

import { QuizType } from '@/types';
import { useState } from 'react';
import Modal from 'react-modal';

interface QuizModalProps {
  isOpen: boolean;
  quizType: keyof typeof QuizType;
  onClose: () => void;
  onSubmit: (amount: number) => void;
}

export default function QuizModal({ isOpen, quizType, onClose, onSubmit }: QuizModalProps) {
  const [amount, setAmount] = useState(10);

  const handleSubmit = () => {
    onSubmit(amount);
    onClose();
  };

  return (
    <Modal
      className="flex h-full w-full items-center justify-center"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className="mb-10 w-full max-w-screen-sm border bg-white p-10">
        <h2 className="text-xl font-semibold">{`${QuizType[quizType]} 퀴즈`}</h2>
        <div className="mt-10">
          <label>개수</label>
          <input
            type="number"
            className="mt-1.5 block w-full border px-3.5 py-2.5 outline-none"
            value={amount}
            autoFocus={true}
            onChange={(e) => setAmount(Number(e.target.value))}
            min={5}
            max={20}
          />
        </div>
        <div className="mt-10 flex justify-end gap-5 font-semibold">
          <button
            className="bg-neutral-100 px-4 py-2 text-neutral-600 transition-colors hover:bg-neutral-200"
            onClick={onClose}
          >
            취소하기
          </button>
          <button
            className="bg-violet-100 px-4 py-2 text-violet-600 transition-colors hover:bg-violet-200"
            onClick={handleSubmit}
          >
            시작하기
          </button>
        </div>
      </div>
    </Modal>
  );
}
