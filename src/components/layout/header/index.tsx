import Link from 'next/link';
import { cookies } from 'next/headers';
import MemberNav from './member-nav';

export default async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get('ACCESS_TOKEN');

  return (
    <header className="fixed z-10 flex w-full justify-center border-b bg-neutral-50 py-2">
      <div className="flex w-full max-w-screen-lg justify-between px-6">
        <Link href={'/'} className="py-2 pr-2 font-medium">
          미래융합대학 기초 학습
        </Link>
        <nav className="flex gap-5 text-neutral-500">{token && <MemberNav />}</nav>
      </div>
    </header>
  );
}
