import React, { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

export default function CartModal() {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const total = state.items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  if (!state.isOpen) return null;

  if (showCheckout) {
    return <CheckoutForm onClose={() => {
      setShowCheckout(false);
      dispatch({ type: 'TOGGLE_CART' });
    }} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 left-0 max-w-md w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">سلة التسوق</h2>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <p className="text-center text-gray-500 mt-4">السلة فارغة</p>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 space-x-reverse"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">{item.price} ريال</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                            })
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: item.id, quantity: item.quantity + 1 },
                            })
                          }
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                          }
                          className="p-1 hover:bg-gray-100 rounded ml-4"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">المجموع:</span>
              <span className="font-semibold">{total.toFixed(2)} ريال</span>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              disabled={state.items.length === 0}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              إتمام الشراء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}