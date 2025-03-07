import { CgArrowLeft, CgArrowRight } from 'react-icons/cg';

interface QuizNavigationProps {
  isFirst: boolean;
  isLast: boolean;
  isPassed: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
}

export default function QuizNavigation({
  isFirst,
  isLast,
  isPassed,
  handlePrevious,
  handleNext,
}: QuizNavigationProps) {
  return (
    <div className="flex w-full justify-between">
      <button
        className={`flex w-16 justify-center bg-violet-100 py-2 text-violet-600 transition-colors ${
          !isFirst ? 'hover:bg-violet-200' : 'cursor-not-allowed opacity-50'
        }`}
        disabled={isFirst}
        onClick={handlePrevious}
      >
        <CgArrowLeft className="h-7 w-7" />
      </button>
      <button
        className={`flex w-16 justify-center bg-violet-100 py-2 font-semibold text-violet-600 transition-colors ${
          isPassed ? 'hover:bg-violet-200' : 'cursor-not-allowed opacity-50'
        }`}
        disabled={!isPassed}
        onClick={handleNext}
      >
        {isLast ? '종료' : <CgArrowRight className="h-7 w-7" />}
      </button>
    </div>
  );
}
