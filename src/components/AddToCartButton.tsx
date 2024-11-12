import React from 'react';

interface AddToCartButtonProps {
  onClick: () => void;
  className?: string;
}

export default function AddToCartButton({ onClick, className = '' }: AddToCartButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-red-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-red-700 ${className}`}
    >
      أضف إلى السلة
    </button>
  );
}