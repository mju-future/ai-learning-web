import Link from 'next/link';

const dummy = [
  {
    id: 1,
    date: '2025.02.15',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을 어쩌구 저쩌구 해결하기 위해',
  },
  {
    id: 2,
    date: '2025.02.14',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을 어쩌구 저쩌구 해결하기 위해',
  },
  {
    id: 3,
    date: '2025.02.14',
    title:
      ' 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 어쩌구 저쩌구 해결하기 위해 어쩌구 저쩌구',
  },
  {
    id: 4,
    date: '2025.02.14',
    title:
      ' 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을 어쩌구 저쩌구 해결하기 위해',
  },
  {
    id: 5,
    date: '2025.02.13',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 경험한 불편함을 개선하기 어쩌구 저쩌구 어어어쩌구 저쩌구',
  },
  {
    id: 6,
    date: '2025.02.13',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 어쩌구 저쩌구 어어어쩌구 저쩌구',
  },
  {
    id: 7,
    date: '2025.02.12',
    title:
      '스스로 문제를 정의하고 해결하는 소프트웨어 엔지니어입니다. 학교생활 중 직접 어쩌구 저쩌구 해결하기 위해',
  },
];

export default function WritingList() {
  return (
    <>
      <h1 className="mt-12 text-3xl font-bold">글쓰기 연습하기</h1>
      <div className="mt-2 flex w-full justify-end">
        <Link
          href={'/writing/new'}
          className="bg-violet-100 px-4 py-2 font-semibold text-violet-600 outline-none transition-colors hover:bg-violet-200"
        >
          AI 피드백 받기
        </Link>
      </div>
      <ul className="mt-10 flex flex-col">
        {dummy.map(({ id, title, date }) => (
          <li key={id}>
            <Link
              href={`/writing/${id}`}
              className="flex justify-between px-4 py-6 transition-colors hover:bg-neutral-50"
            >
              <span className="w-2/3 truncate">{title}</span>
              <span className="text-neutral-500">{date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
