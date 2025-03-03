import { cookies } from 'next/headers';
import { fetchRandomQuizzes } from '@/api';
import { DetailType, QuizType } from '@/types';
import QuizContainer from '@/components/quiz/quiz-container';

interface QuizParams {
  searchParams: Promise<{
    type: keyof typeof QuizType;
    detailType: keyof typeof DetailType;
    amount: number;
  }>;
}

export default async function Quiz({ searchParams }: QuizParams) {
  const { type, detailType, amount } = await searchParams;
  const token = (await cookies()).get('ACCESS_TOKEN')!.value;
  const quizzes = await fetchRandomQuizzes(type, detailType, amount, token);

  return <QuizContainer type={type} data={quizzes} />;
}
