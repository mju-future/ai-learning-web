'use client';

import Link from 'next/link';
import { useState } from 'react';
import MemberNav from './member-nav';
import NonMemberNav from './non-member-nav';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <header className="fixed z-10 flex w-full justify-center border-b bg-slate-50 py-2">
      <div className="flex w-full max-w-screen-lg justify-between px-6">
        <Link href={'/'} className="py-2 pr-2 font-medium">
          미래융합대학 기초 학습
        </Link>
        <nav className="flex gap-4 text-neutral-500">
          {isLoggedIn ? <MemberNav /> : <NonMemberNav />}
        </nav>
      </div>
    </header>
  );
}
