import { ChangeEvent } from 'react';
import Input from '@/components/common/input';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, type, name, value, onChange }: InputFieldProps) {
  return (
    <div className="flex w-full flex-col">
      <label className="text-neutral-600">{label}</label>
      <Input type={type} name={name} value={value} spellCheck={false} onChange={onChange} />
    </div>
  );
}
