import React from 'react';

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
  [key: string]: any;
}) => {
  const base =
    "w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors";

  const ghost = "bg-transparent hover:bg-gray-800/40";
  const primary = "bg-blue-600 text-white hover:bg-blue-700";

  const cls = [base, variant === 'primary' ? primary : ghost, className].filter(Boolean).join(' ');

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};
