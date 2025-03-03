import { DetailType } from '@/types';
import { CgChevronDown } from 'react-icons/cg';
import { useRef } from 'react';

interface QuizOptionProps {
  value: keyof typeof DetailType;
  onChange: (value: keyof typeof DetailType) => void;
}

export default function QuizOption({ value, onChange }: QuizOptionProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  function handleIconClick() {
    selectRef.current?.focus();
    selectRef.current?.click();
  }

  return (
    <div className="mt-1.5 flex items-center border">
      <select
        ref={selectRef}
        className="z-10 w-full bg-transparent px-3 py-3 outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value as keyof typeof DetailType)}
      >
        {Object.keys(DetailType).map((key) => (
          <option key={key} value={key}>
            {DetailType[key as keyof typeof DetailType]}
          </option>
        ))}
      </select>
      <CgChevronDown className="-ml-8 h-5 w-5" onClick={handleIconClick} />
    </div>
  );
}
