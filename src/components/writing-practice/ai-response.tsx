import { forwardRef } from 'react';
import { RiRobot2Line } from 'react-icons/ri';

interface AiChatProps {
  text: string;
}

const AiChat = forwardRef<HTMLDivElement, AiChatProps>(({ text }, ref) => (
  <div ref={ref} className="border-b pb-10">
    <div className="mb-4">
      <RiRobot2Line className="mb-1 h-7 w-7 text-violet-600" />
      <h3 className="text-2xl font-semibold">AI 답변</h3>
    </div>
    <p>{text}</p>
  </div>
));

AiChat.displayName = 'AiChat';

export default AiChat;
