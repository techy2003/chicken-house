import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartButton() {
  const { state, dispatch } = useCart();
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_CART' })}
      className="p-2 rounded-md text-gray-700 hover:text-gray-900 relative"
    >
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}