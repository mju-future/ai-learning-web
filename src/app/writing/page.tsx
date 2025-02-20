import Link from 'next/link';
import { fetchWritingPractices } from '@/api';
import { cookies } from 'next/headers';

export default async function WritingList() {
  const token = (await cookies()).get('ACCESS_TOKEN')!.value;
  const writingPractices = await fetchWritingPractices(token);

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
        {writingPractices.map(({ id, title, date }) => (
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
