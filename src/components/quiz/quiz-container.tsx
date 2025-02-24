'use client';

import { useState, useReducer } from 'react';
import { Quiz, QuizType } from '@/types';
import OptionItem from './option-item';
import QuizNavigation from './quiz-navigation';

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

  const { answer, options, explanation } = data[currentIndex];

  function handlePrevious() {
    dispatch({ type: 'PREVIOUS', length: data.length });
  }

  function handleNext() {
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

    setIsPassed((prev) =>
      prev.map((value, currentIndex) => (currentIndex === currentIndex ? true : value))
    );
    setShowExplanation((prev) =>
      prev.map((value, currentIndex) => (currentIndex === currentIndex ? true : value))
    );
  }

  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold text-violet-600">{`${QuizType[type]} - 문제${currentIndex + 1}`}</h2>
      <p className="mt-2.5 text-2xl font-medium">
        다음 중 &apos;행복한&apos;을 의미하는 영어 단어는 무엇일까요?
      </p>
      <div className="my-10">
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
        isFirst={currentIndex === 0}
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
