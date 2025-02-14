import Link from 'next/link';

const dummyList = [
  {
    date: '2025.02.12',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을...',
  },
  {
    date: '2025.02.13',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을...',
  },
  {
    date: '2025.02.13',
    title: '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한...',
  },
  {
    date: '2025.02.14',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을...',
  },
  {
    date: '2025.02.14',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을 개선하기..',
  },
  {
    date: '2025.02.15',
    title: '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접..',
  },
  {
    date: '2025.02.15',
    title: '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접...',
  },
];

export default function WritingList() {
  return (
    <>
      <h1 className="mt-12 text-3xl font-bold">글쓰기 연습하기</h1>
      <div className="mt-4 flex w-full justify-end">
        <Link
          href={'/writing/new'}
          className="bg-violet-100 px-4 py-2 font-semibold text-violet-600 outline-none transition-colors hover:bg-violet-200"
        >
          AI 피드백 받기
        </Link>
      </div>
      <ul className="mt-8 flex flex-col">
        {dummyList.map((item, index) => (
          <li
            key={index}
            className="flex cursor-pointer justify-between px-5 py-6 transition-colors hover:bg-neutral-100"
          >
            <Link href={`/writing/${index}`}>{item.title}</Link>
            <span className="text-neutral-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
