import { CgArrowLeft, CgArrowRight } from 'react-icons/cg';

interface QuizNavigationProps {
  isFirst: boolean;
  isPassed: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
}

export default function QuizNavigation({
  isFirst,
  isPassed,
  handlePrevious,
  handleNext,
}: QuizNavigationProps) {
  return (
    <div className="flex w-full justify-between">
      <button
        className={`bg-violet-100 px-4 py-2 text-violet-600 transition-colors ${
          !isFirst ? 'hover:bg-violet-200' : 'cursor-not-allowed opacity-50'
        }`}
        disabled={isFirst}
        onClick={handlePrevious}
      >
        <CgArrowLeft className="h-6 w-6" />
      </button>
      <button
        className={`bg-violet-100 px-4 py-2 text-violet-600 transition-colors ${
          isPassed ? 'hover:bg-violet-200' : 'cursor-not-allowed opacity-50'
        }`}
        disabled={!isPassed}
        onClick={handleNext}
      >
        <CgArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
