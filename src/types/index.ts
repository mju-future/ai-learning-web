export interface LoginData {
  loginId: string;
  password: string;
}

export interface WritingPractice {
  id: string;
  title: string;
  date: string;
}

export interface WritingPracticeChat {
  id: number;
  sender: string;
  content: string;
}

export interface AiFeedback {
  id: string;
}

export const QuizType = {
  VOCABULARY: '어휘',
  GRAMMAR: '문법',
} as const;

export interface Quiz {
  id: string;
  question: string;
  answer: number;
  options: QuizOption[];
  explanation: string;
}

export interface QuizOption {
  number: number;
  value: string;
}
