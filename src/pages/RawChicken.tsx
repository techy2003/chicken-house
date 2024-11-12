import React from 'react';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'صدور دجاج بدون عظم',
    price: '45.99',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80',
    weight: '1 كجم'
  },
  {
    id: 2,
    name: 'صدور دجاج بالعظم',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    weight: '1 كجم'
  },
  {
    id: 3,
    name: 'أفخاذ دجاج بالعظم',
    price: '35.99',
    image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9a21?auto=format&fit=crop&q=80',
    weight: '1 كجم'
  },
  {
    id: 4,
    name: 'أفخاذ دجاج بدون عظم',
    price: '42.99',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80',
    weight: '1 كجم'
  },
  {
    id: 5,
    name: 'أجنحة دجاج',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    weight: '1 كجم'
  },
  {
    id: 6,
    name: 'كبدة دجاج',
    price: '25.99',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    weight: '500 جرام'
  }
];

export default function RawChicken() {
  const { dispatch } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">دجاج طازج</h1>
          <p className="mt-4 text-xl text-gray-500">اختر من تشكيلتنا المتنوعة من الدجاج الطازج</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.weight}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{product.price} ريال</p>
              </div>
              <AddToCartButton onClick={() => handleAddToCart(product)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}