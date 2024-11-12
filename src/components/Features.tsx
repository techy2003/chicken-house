import React from 'react';
import { Clock, Truck, Award, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'توصيل سريع',
    description: 'توصيل في نفس اليوم لجميع الطلبات'
  },
  {
    icon: Truck,
    title: 'تغطية شاملة',
    description: 'نوصل إلى جميع مناطق المدينة'
  },
  {
    icon: Award,
    title: 'جودة عالية',
    description: 'دجاج طازج من أفضل المزارع'
  },
  {
    icon: ThumbsUp,
    title: 'ضمان الجودة',
    description: 'استرداد كامل في حال عدم الرضا'
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">لماذا تختارنا؟</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}