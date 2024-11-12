import React from 'react';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'شيش طاووق',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    description: 'متبل بالثوم والليمون',
    weight: '1 كجم'
  },
  {
    id: 2,
    name: 'دجاج مشوي متبل',
    price: '54.99',
    image: 'https://images.unsplash.com/photo-1588767768106-1b20e51d9a21?auto=format&fit=crop&q=80',
    description: 'متبل بالأعشاب والتوابل',
    weight: '1 كجم'
  },
  {
    id: 3,
    name: 'أجنحة حارة',
    price: '44.99',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    description: 'متبلة بصلصة الفلفل الحار',
    weight: '1 كجم'
  }
];

export default function FlavoredChicken() {
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
          <h1 className="text-4xl font-extrabold text-gray-900">دجاج متبل</h1>
          <p className="mt-4 text-xl text-gray-500">تشكيلة متنوعة من الدجاج المتبل الجاهز للطهي</p>
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
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <p className="mt-1 text-sm text-gray-500">{product.weight}</p>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-900">{product.price} ريال</p>
                </div>
              </div>
              <AddToCartButton onClick={() => handleAddToCart(product)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}