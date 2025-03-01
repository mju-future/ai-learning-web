import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '새 글쓰기',
};

export default function WritingNewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full flex-col">{children}</main>;
}
