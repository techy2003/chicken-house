import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مشترك منذ 6 أشهر",
    content: "جودة ممتازة وخدمة توصيل منتظمة. أنصح بشدة بالاشتراك الشهري."
  },
  {
    name: "سارة أحمد",
    role: "مشتركة منذ سنة",
    content: "الدجاج طازج دائماً والتوصيل في الموعد المحدد. خدمة ممتازة!"
  },
  {
    name: "خالد عبدالله",
    role: "مشترك منذ 3 أشهر",
    content: "تجربة رائعة مع باقة العائلة. التوفير والجودة يستحقان التجربة."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">آراء عملائنا</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}