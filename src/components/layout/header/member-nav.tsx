'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { path: '/english-words', label: '영어 단어' },
  { path: '/writing', label: '글쓰기' },
];

export default function MemberNav() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={`${pathname === path ? 'font-medium text-violet-600' : 'transition-colors hover:text-neutral-800'} p-2`}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
