'use client';

import { useState, useRef, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { chat } from '@/api';
import { WritingPracticeChat } from '@/types';
import MemberChat from './user-request';
import AiChat from './ai-response';
import UserInput from './user-input';
import ChatLoading from './chat-loading';

interface WritingPracticeClientProps {
  id: string;
  initialData: WritingPracticeChat[];
}

export default function WritingPracticeChatList({ id, initialData }: WritingPracticeClientProps) {
  const [chats, setChats] = useState<WritingPracticeChat[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const token = getCookie('ACCESS_TOKEN') as string;

  async function handleSendMessage(content: string) {
    setChats((prev) => [...prev, { id: Date.now(), sender: 'MEMBER', content }]);
    setIsLoading(true);
    const aiChat = await chat(id, content, token);
    setIsLoading(false);
    setChats((prev) => [...prev, aiChat]);
  }

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [chats]);

  return (
    <>
      {chats.map(({ id, sender, content }, index) => {
        const isLastMessage = index === chats.length - 1;
        return sender === 'MEMBER' ? (
          <MemberChat key={id} text={content} />
        ) : (
          <AiChat key={id} text={content} ref={isLastMessage ? lastMessageRef : null} />
        );
      })}
      {isLoading && <ChatLoading />}
      <UserInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </>
  );
}
