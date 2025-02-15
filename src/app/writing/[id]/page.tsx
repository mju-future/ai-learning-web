import AiResponse from '@/components/writing-practice/ai-response';
import UserInput from '@/components/writing-practice/user-input';
import UserRequest from '@/components/writing-practice/user-request';

const dummy = [
  {
    id: 1,
    type: 'USER',
    text: '안녕하세요. 오늘 날씨가 어떤가요?',
  },
  {
    id: 2,
    type: 'AI',
    text: '안녕하세요. 오늘 날씨는 맑습니다.',
  },
  {
    id: 3,
    type: 'USER',
    text: '오늘은 무슨 일정이 있나요?',
  },
  {
    id: 4,
    type: 'AI',
    text: '오늘은 회의가 있습니다.',
  },
];

export default function WritingPractice() {
  return (
    <>
      {dummy.map((item) =>
        item.type === 'USER' ? (
          <UserRequest key={item.id} text={item.text} />
        ) : (
          <AiResponse key={item.id} text={item.text} />
        )
      )}
      <UserInput />
    </>
  );
}
