import Link from 'next/link';

export default function NonMemberNav() {
  return (
    <Link href={'/english-words'} className="p-2 transition-colors hover:text-neutral-800">
      로그인
    </Link>
  );
}
