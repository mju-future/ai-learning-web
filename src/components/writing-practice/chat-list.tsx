'use client';

import { WritingPracticeChat } from '@/types';
import MemberChat from './user-request';
import AiChat from './ai-response';
import UserInput from './user-input';
import { getCookie } from 'cookies-next';
import { chat } from '@/api';
import { useState } from 'react';
import ChatLoading from './chat-loading';

interface WritingPracticeClientProps {
  id: string;
  initialData: WritingPracticeChat[];
}

export default function WritingPracticeChatList({ id, initialData }: WritingPracticeClientProps) {
  const [chats, setChats] = useState<WritingPracticeChat[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const token = getCookie('ACCESS_TOKEN') as string;

  async function handleSendMessage(content: string) {
    setChats((prev) => [...prev, { id: Date.now(), sender: 'MEMBER', content }]);
    setIsLoading(true);
    const aiChat = await chat(id, token, content);
    setIsLoading(false);
    setChats((prev) => [...prev, aiChat]);
  }

  return (
    <>
      {chats.map(({ id, sender, content }) =>
        sender === 'MEMBER' ? (
          <MemberChat key={id} text={content} />
        ) : (
          <AiChat key={id} text={content} />
        )
      )}
      {isLoading && <ChatLoading />}
      <UserInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </>
  );
}
