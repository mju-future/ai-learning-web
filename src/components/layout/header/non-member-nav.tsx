'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [{ path: '/login', label: '로그인' }];

export default function NonMemberNav() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={`${pathname === path && 'hidden'} p-2 transition-colors hover:text-neutral-800`}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
