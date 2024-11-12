import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img className="h-12" src="/logo.png" alt="تشيكن هاوس" />
            <p className="mt-4 text-gray-300">
              دجاج طازج عالي الجودة يصل إلى باب منزلك. اختبر أفضل مذاق وخدمة.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">المنتجات</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/raw-chicken" className="text-base text-gray-300 hover:text-white">دجاج طازج</Link></li>
              <li><Link to="/subscription" className="text-base text-gray-300 hover:text-white">الاشتراكات</Link></li>
              <li><Link to="/flavored" className="text-base text-gray-300 hover:text-white">دجاج متبل</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">تواصل معنا</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">البريد: info@chickenhouse.today</li>
              <li className="text-base text-gray-300">الهاتف: 966123456789+</li>
              <li className="text-base text-gray-300">العنوان: الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} تشيكن هاوس. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}