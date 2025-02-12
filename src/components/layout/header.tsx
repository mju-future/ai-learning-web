import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed z-10 flex w-full justify-center border-b bg-slate-50 py-2">
      <div className="flex w-full max-w-screen-lg justify-between px-6">
        <Link href={'/'} className="p-2 font-medium">
          미래융합대학 기초 학습
        </Link>
        <div className="flex gap-4 text-neutral-500">
          <Link href={'/english-words'} className="p-2 transition-colors hover:text-neutral-800">
            영어 단어
          </Link>
          <Link href={'/writing'} className="p-2 transition-colors hover:text-neutral-800">
            글쓰기
          </Link>
        </div>
      </div>
    </header>
  )
}
