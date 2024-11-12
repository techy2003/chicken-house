import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useCart } from '../context/CartContext';

interface CheckoutFormProps {
  onClose: () => void;
}

export default function CheckoutForm({ onClose }: CheckoutFormProps) {
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const total = state.items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const orderDetails = state.items.map(item => 
      `${item.name} x ${item.quantity} (${parseFloat(item.price) * item.quantity} ريال)`
    ).join('\n');

    try {
      await emailjs.send(
        'service_mnbpwlu', // Replace with your EmailJS service ID
        'template_8ho4m5t', // Replace with your EmailJS template ID
        {
          to_email: 'chickenhouseorder@gmail.com',
          from_name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          notes: formData.notes,
          order_details: orderDetails,
          total_amount: `${total.toFixed(2)} ريال`
        },
        'AqgqTYH9rCYywcUPH' // Replace with your EmailJS public key
      );

      setSuccess(true);
      dispatch({ type: 'CLEAR_CART' });
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setError('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 text-center">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">تم تأكيد طلبك</h3>
          <p className="text-gray-600 mb-4">سنتواصل معك قريباً لتأكيد التفاصيل</p>
          <button
            onClick={onClose}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            إغلاق
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">إتمام الطلب</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              رقم الجوال
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              dir="ltr"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              المدينة
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              العنوان التفصيلي
            </label>
            <textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">المجموع:</span>
              <span className="font-bold text-lg">{total.toFixed(2)} ريال</span>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="flex space-x-4 space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:bg-gray-400"
            >
              {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}