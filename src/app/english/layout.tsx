import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '영어 학습',
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full flex-col">{children}</main>;
}
