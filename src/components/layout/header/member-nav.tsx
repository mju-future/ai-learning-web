'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { logout } from '@/app/actions/auth';

const navItems = [
  { path: '/english-words', label: '영어 단어' },
  { path: '/writing', label: '글쓰기' },
];

export default function MemberNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push('/login');
    router.refresh();
  }

  return (
    <>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={`${pathname === path ? 'font-semibold text-violet-600' : 'transition-colors hover:text-neutral-800'} p-2`}
        >
          {label}
        </Link>
      ))}
      <button className="p-2 transition-colors hover:text-neutral-800" onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );
}
