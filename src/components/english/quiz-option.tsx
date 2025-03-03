import { QuizCategory } from '@/types';

interface QuizOptionProps {
  value: keyof typeof QuizCategory;
  onChange: (value: keyof typeof QuizCategory) => void;
}

export default function QuizOption({ value, onChange }: QuizOptionProps) {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value as keyof typeof QuizCategory)}>
        {Object.keys(QuizCategory).map((key) => (
          <option key={key} value={key}>
            {QuizCategory[key as keyof typeof QuizCategory]}
          </option>
        ))}
      </select>
    </div>
  );
}
