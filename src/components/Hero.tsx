import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80"
          alt="دجاج طازج"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          دجاج طازج عالي الجودة
          <span className="block text-red-500">يصل إلى باب منزلك يومياً</span>
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          اختر من تشكيلتنا المتنوعة من الدجاج الطازج أو اشترك في خدمة التوصيل المنتظم.
        </p>
        <div className="mt-10">
          <Link
            to="/subscription"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            ابدأ الاشتراك
          </Link>
        </div>
      </div>
    </div>
  );
}