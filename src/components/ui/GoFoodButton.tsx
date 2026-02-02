'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { GOFOOD_URL } from '@/data/constants';

interface GoFoodButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function GoFoodButton({
  className = '',
  size = 'md',
  fullWidth = false
}: GoFoodButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.a
      href={GOFOOD_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center gap-2
        bg-green-600 hover:bg-green-700 text-white font-semibold
        rounded-full transition-colors
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <ShoppingBag className="w-5 h-5" />
      Pesan di GoFood
    </motion.a>
  );
}
