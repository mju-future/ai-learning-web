import { InputHTMLAttributes } from 'react';

export default function Input({ className, ...others }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      autoComplete="off"
      spellCheck={false}
      className={`${className} mt-1.5 border px-3.5 py-2.5 outline-none transition-colors focus:bg-neutral-50`}
      {...others}
    />
  );
}
