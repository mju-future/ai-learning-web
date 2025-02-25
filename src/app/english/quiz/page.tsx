import { cookies } from 'next/headers';
import { fetchRandomQuizzes } from '@/api';
import { QuizType } from '@/types';
import QuizContainer from '@/components/quiz/quiz-container';

interface QuizParams {
  searchParams: Promise<{ type: keyof typeof QuizType; amount: number }>;
}

export default async function Quiz({ searchParams }: QuizParams) {
  const { type, amount } = await searchParams;
  const token = (await cookies()).get('ACCESS_TOKEN')!.value;
  const quizzes = await fetchRandomQuizzes(type, amount, token);

  return <QuizContainer type={type} data={quizzes} />;
}
