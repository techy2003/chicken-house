import React from 'react';
import { Link } from 'react-router-dom';

export default function MonthlyOffer() {
  return (
    <div className="bg-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-red-600 sm:text-4xl">
                <span className="block">عرض الشهر</span>
                <span className="block text-gray-900">خصم 25% على باقة العائلة</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                احصل على خصم حصري عند الاشتراك في باقة العائلة لمدة 3 أشهر. يشمل العرض توصيل مجاني وهدية خاصة.
              </p>
              <Link
                to="/subscription"
                className="mt-8 bg-red-600 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-white hover:bg-red-700"
              >
                اشترك الآن
              </Link>
            </div>
          </div>
          <div className="relative -mt-6 aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-2">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?auto=format&fit=crop&q=80"
              alt="عرض الشهر"
            />
          </div>
        </div>
      </div>
    </div>
  );
}