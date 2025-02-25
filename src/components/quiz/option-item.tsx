import { QuizOption } from '@/types';

interface OptionItemProps {
  answer: number;
  option: QuizOption;
  selectedNumber: number;
  isPassed: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function OptionItem({
  answer,
  option: { number, value },
  selectedNumber,
  isPassed,
  onClick,
}: OptionItemProps) {
  const isCorrect = number === answer;
  const isSelected = selectedNumber === number;
  const isAnswered = isPassed;

  const buttonClass = [
    'flex w-full max-w-screen-sm items-center px-3 py-3.5 transition-colors',
    isAnswered && isCorrect && 'bg-green-100 bg-opacity-80 font-medium',
    isAnswered && isSelected && !isCorrect && 'bg-red-100 bg-opacity-50 font-medium',
    isAnswered && !isSelected && !isCorrect && 'opacity-50',
    !isAnswered && 'hover:bg-neutral-50',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClass}
      key={number}
      value={number}
      onClick={onClick}
      disabled={isAnswered}
    >
      <span className="mr-3 inline-block h-8 w-8 content-center font-medium text-violet-600">
        {number}.
      </span>
      {value}
    </button>
  );
}

export default OptionItem;
