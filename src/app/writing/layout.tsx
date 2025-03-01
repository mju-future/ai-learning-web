import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '글쓰기 연습',
};
        
export default function WritingListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full flex-col">{children}</main>;
}
