'use client';

import { useState, useReducer } from 'react';
import { Quiz, QuizType } from '@/types';
import OptionItem from './option-item';
import QuizNavigation from './quiz-navigation';
import { useRouter } from 'next/navigation';

interface QuizContainerProps {
  type: keyof typeof QuizType;
  data: Quiz[];
}

interface Action {
  type: 'PREVIOUS' | 'NEXT';
  length: number;
}

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'PREVIOUS':
      return state > 0 ? state - 1 : state;
    case 'NEXT':
      return state < action.length - 1 ? state + 1 : state;
    default:
      return state;
  }
}

export default function QuizContainer({ type, data }: QuizContainerProps) {
  const [currentIndex, dispatch] = useReducer(reducer, 0);
  const [isPassed, setIsPassed] = useState(Array(data.length).fill(false));
  const [selectedNumber, setSelectedNumber] = useState<number[]>(Array(data.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(Array(data.length).fill(false));
  const [count, setCount] = useState(0);
  const router = useRouter();

  const { question, answer, options, explanation } = data[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === data.length - 1;

  function handlePrevious() {
    dispatch({ type: 'PREVIOUS', length: data.length });
  }

  function handleNext() {
    if (isLast) {
      router.push('/english');
    }

    dispatch({ type: 'NEXT', length: data.length });
    setCount(0);
  }

  function handleAnswer(event: React.MouseEvent<HTMLButtonElement>) {
    const selectedValue = parseInt(event.currentTarget.value);
    setSelectedNumber((prev) =>
      prev.map((value, index) => (currentIndex === index ? selectedValue : value))
    );

    if (selectedValue === answer) {
      setIsPassed((prev) => prev.map((value, index) => (currentIndex === index ? true : value)));
      setShowExplanation((prev) =>
        prev.map((value, index) => (currentIndex === index ? true : value))
      );
      return;
    }

    if (count < 1) {
      setCount((prev) => prev + 1);
      return;
    }

    setIsPassed((prev) => prev.map((value, index) => (currentIndex === index ? true : value)));
    setShowExplanation((prev) =>
      prev.map((value, index) => (currentIndex === index ? true : value))
    );
  }

  return (
    <section className="mt-20">
      <h2 className="font-semibold text-violet-600">{`${QuizType[type]} - 문제${currentIndex + 1}`}</h2>
      <div className="mt-2.5 font-medium leading-loose">
        {question.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="my-8">
        {options.map((option) => (
          <OptionItem
            key={option.number}
            answer={answer}
            option={option}
            selectedNumber={selectedNumber[currentIndex]}
            isPassed={isPassed[currentIndex]}
            onClick={handleAnswer}
          />
        ))}
      </div>
      <QuizNavigation
        isFirst={isFirst}
        isLast={isLast}
        isPassed={isPassed[currentIndex]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      {showExplanation[currentIndex] && (
        <section className="mt-10 border p-6">
          <h2 className="text-xl font-semibold">해설</h2>
          <div className="mt-5">{explanation}</div>
        </section>
      )}
    </section>
  );
}
