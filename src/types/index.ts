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

export const DetailType = {
  MEANING: '단어 뜻 맞추기',
  WORD: '뜻으로 단어 맞추기',
  FILL_IN: '빈칸 채우기',
} as const;

export interface WordInfo {
  word: string;
  partOfSpeech: string;
  definition: Definition[];
  example: Example[];
}

export interface Definition {
  english: string;
  korean: string;
}

export interface Example {
  english: string;
  korean: string;
}
