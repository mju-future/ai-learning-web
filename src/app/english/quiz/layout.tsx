import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '퀴즈',
};

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full flex-col">{children}</main>;
}
