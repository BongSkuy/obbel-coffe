'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'green' | 'black';
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

export default function PrimaryButton({
  children,
  className = '',
  size = 'md',
  fullWidth = false,
  variant = 'green',
  onClick,
  ...props
}: PrimaryButtonProps) {
  const variantClasses = {
    green: 'bg-green-600 hover:bg-green-700 text-white',
    black: 'bg-black hover:bg-gray-800 text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        font-semibold rounded-full transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
