import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/layout/header';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | 미래융합대학 AI 기초학습 지원',
    default: '미래융합대학 AI 기초학습 지원',
  },
  description: '명지대학교 미래융합대학 AI 기초학습 지원 서비스',
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} flex min-h-screen w-full justify-center overflow-y-scroll text-lg tracking-tight text-neutral-800 antialiased`}
      >
        <Header />
        <div className="mb-12 mt-[61px] flex w-full max-w-screen-lg justify-center px-6">
          {children}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            pauseOnHover={false}
            hideProgressBar={true}
          />
        </div>
      </body>
    </html>
  );
}
