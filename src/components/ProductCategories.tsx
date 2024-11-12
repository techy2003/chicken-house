import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'raw',
    title: 'دجاج طازج',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80',
    path: '/raw-chicken'
  },
  {
    id: 'subscription',
    title: 'الاشتراكات',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80',
    path: '/subscription'
  },
  {
    id: 'flavored',
    title: 'دجاج متبل',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80',
    path: '/flavored'
  }
];

export default function ProductCategories() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">منتجاتنا</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} to={category.path} className="group">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">{category.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}