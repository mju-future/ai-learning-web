import { RiRobot2Line } from 'react-icons/ri';

export default function ChatLoading() {
  return (
    <div>
      <RiRobot2Line className="mb-1 h-7 w-7 text-violet-600" />
      <h3 className="animate-pulse text-3xl font-semibold">AI가 답변을 생성 중이에요</h3>
    </div>
  );
}
