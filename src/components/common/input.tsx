import { InputHTMLAttributes } from 'react';

export default function Input({ className, ...others }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${className} border px-3.5 py-2.5 outline-none transition-colors focus:bg-slate-50`}
      {...others}
    />
  );
}
