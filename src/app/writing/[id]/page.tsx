import { cookies } from 'next/headers';
import { fetchWritingPracticeChats } from '@/api';
import WritingPracticeChatList from '@/components/writing/chat-list';

interface WritingPracticeProps {
  params: Promise<{ id: string }>;
}

export default async function WritingPractice({ params }: WritingPracticeProps) {
  const { id } = await params;
  const token = (await cookies()).get('ACCESS_TOKEN')!.value;
  const writingPracticeChats = await fetchWritingPracticeChats(id, token);

  return <WritingPracticeChatList id={id} initialData={writingPracticeChats} />;
}
