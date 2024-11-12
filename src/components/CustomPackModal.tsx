import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ChickenPart {
  id: string;
  name: string;
  price: number;
  image: string;
  maxQuantity: number;
}

interface CustomPackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selections: { [key: string]: number }) => void;
}

const chickenParts: ChickenPart[] = [
  {
    id: 'breast',
    name: 'صدور دجاج',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80',
    maxQuantity: 5
  },
  {
    id: 'thighs',
    name: 'أفخاذ دجاج',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9a21?auto=format&fit=crop&q=80',
    maxQuantity: 5
  },
  {
    id: 'wings',
    name: 'أجنحة دجاج',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    maxQuantity: 10
  },
  {
    id: 'whole',
    name: 'دجاج كامل',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?auto=format&fit=crop&q=80',
    maxQuantity: 2
  }
];

export default function CustomPackModal({ isOpen, onClose, onConfirm }: CustomPackModalProps) {
  const [selections, setSelections] = useState<{ [key: string]: number }>(
    chickenParts.reduce((acc, part) => ({ ...acc, [part.id]: 0 }), {})
  );

  const calculateTotal = () => {
    return chickenParts.reduce((total, part) => {
      return total + (selections[part.id] * part.price);
    }, 0);
  };

  const handleQuantityChange = (partId: string, change: number) => {
    const part = chickenParts.find(p => p.id === partId);
    if (!part) return;

    const currentQty = selections[partId];
    const newQty = Math.max(0, Math.min(currentQty + change, part.maxQuantity));
    
    setSelections(prev => ({
      ...prev,
      [partId]: newQty
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto" dir="rtl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">تخصيص الباقة</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            {chickenParts.map((part) => (
              <div key={part.id} className="flex items-center space-x-4 space-x-reverse">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{part.name}</h3>
                  <p className="text-gray-500">{part.price} ريال/كجم</p>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <button
                    onClick={() => handleQuantityChange(part.id, -1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{selections[part.id]}</span>
                  <button
                    onClick={() => handleQuantityChange(part.id, 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium text-gray-900">المجموع:</span>
              <span className="text-2xl font-bold text-gray-900">
                {calculateTotal().toFixed(2)} ريال
              </span>
            </div>

            <div className="flex space-x-4 space-x-reverse">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  onConfirm(selections);
                  onClose();
                }}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                disabled={calculateTotal() === 0}
              >
                تأكيد الاختيار
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}