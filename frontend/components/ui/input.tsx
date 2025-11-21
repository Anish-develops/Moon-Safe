import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props;
  const base = 'w-full rounded-lg px-3 py-2 border border-gray-700 bg-gray-900 text-white';
  return <input className={(className ? className + ' ' : '') + base} {...(rest as any)} />;
};
