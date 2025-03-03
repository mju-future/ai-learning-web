'use client';

import QuizOption from './quiz-option';
import { QuizType, QuizCategory } from '@/types';
import { useReducer, useState } from 'react';
import Modal from 'react-modal';

interface QuizModalProps {
  isOpen: boolean;
  quizType: keyof typeof QuizType;
  onClose: () => void;
  onSubmit: (amount: number, quizCatrgory: keyof typeof QuizCategory) => void;
}

interface AmountAction {
  type: 'INCREASE' | 'DECREASE';
}

function amountReducer(state: number, action: AmountAction): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 5 <= 20 ? state + 5 : state;
    case 'DECREASE':
      return state - 5 >= 5 ? state - 5 : state;
    default:
      return state;
  }
}

export default function QuizModal({ isOpen, quizType, onClose, onSubmit }: QuizModalProps) {
  const [amount, dispatch] = useReducer(amountReducer, 10);
  const [quizCatrgory, setQuizCatrgory] = useState<keyof typeof QuizCategory>('matchMeaning');

  const handleSubmit = () => {
    onSubmit(amount, quizCatrgory);
    onClose();
  };

  return (
    <Modal
      className="flex h-full w-full items-center justify-center"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className="mb-10 w-full max-w-xl border bg-white p-8">
        <h2 className="text-xl font-semibold">{`${QuizType[quizType]} 퀴즈`}</h2>
        <div className="mt-10">
          <label>문제 유형</label>
          <QuizOption value={quizCatrgory} onChange={setQuizCatrgory} />
        </div>
        <div className="mt-10">
          <label>개수</label>
          <div className="mt-1.5 flex w-full border">
            <input
              type="number"
              readOnly={true}
              onClick={() => {}}
              className="w-full px-3 py-2 outline-none"
              value={amount}
            />
            <div className="flex flex-col bg-neutral-100">
              <button
                className="h-full px-5 outline-none transition-colors hover:bg-neutral-200"
                onClick={() => dispatch({ type: 'INCREASE' })}
              >
                +
              </button>
              <button
                className="h-full px-5 outline-none transition-colors hover:bg-neutral-200"
                onClick={() => dispatch({ type: 'DECREASE' })}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-end gap-2.5 font-semibold">
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
