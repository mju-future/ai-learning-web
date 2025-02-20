export interface LoginRequest {
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

export interface AskFeedbackResponse {
  id: string;
}
