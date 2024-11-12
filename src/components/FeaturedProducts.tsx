import React from 'react';

const products = [
  {
    id: 1,
    name: 'Fresh Chicken Breast',
    price: '45.99',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80',
    category: 'Raw'
  },
  {
    id: 2,
    name: 'Marinated Wings',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    category: 'Flavored'
  },
  {
    id: 3,
    name: 'Whole Chicken',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?auto=format&fit=crop&q=80',
    category: 'Raw'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href="#">{product.name}</a>
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-900">SAR {product.price}</p>
              </div>
              <button className="mt-4 w-full bg-red-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}