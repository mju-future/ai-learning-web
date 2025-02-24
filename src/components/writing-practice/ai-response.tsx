import { forwardRef } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import ReactMarkdown from 'react-markdown';

interface AiChatProps {
  text: string;
}

const AiChat = forwardRef<HTMLDivElement, AiChatProps>(({ text }, ref) => (
  <div ref={ref} className="ai-response border-b pb-10">
    <div className="mb-5 text-violet-600">
      <RiRobot2Line className="mb-1 h-7 w-7" />
      <h2 className="text-2xl font-semibold">AI 답변</h2>
    </div>
    <ReactMarkdown>{text}</ReactMarkdown>
  </div>
));

AiChat.displayName = 'AiChat';

export default AiChat;
