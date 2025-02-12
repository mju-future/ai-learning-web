import Link from 'next/link';

export default function MemberNav() {
  return (
    <>
      <Link href={'/english-words'} className="p-2 transition-colors hover:text-neutral-800">
        영어 단어
      </Link>
      <Link href={'/writing'} className="p-2 transition-colors hover:text-neutral-800">
        글쓰기
      </Link>
    </>
  );
}
