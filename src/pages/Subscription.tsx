import React, { useState } from 'react';
import { Dumbbell, Users, Settings, Calendar, Pause, Edit2, ArrowUpRight } from 'lucide-react';
import CustomPackModal from '../components/CustomPackModal';

const plans = [
  {
    id: 'gym',
    name: 'باقة الجيم',
    icon: Dumbbell,
    description: 'صدور دجاج عالية البروتين لمحبي الرياضة',
    features: [
      'صدور دجاج فاخرة',
      'وجبات مقسمة',
      'معلومات غذائية',
      'توصيل أسبوعي'
    ],
    price: '299'
  },
  {
    id: 'family',
    name: 'باقة العائلة',
    icon: Users,
    description: 'تشكيلة متنوعة مثالية للعائلة',
    features: [
      'أجنحة وأفخاذ',
      'دجاج كامل',
      'نصائح للطبخ',
      'توصيل مرن'
    ],
    price: '399'
  },
  {
    id: 'custom',
    name: 'الباقة المخصصة',
    icon: Settings,
    description: 'صمم اشتراكك الخاص',
    features: [
      'اختر القطع المفضلة',
      'خيارات طازجة أو متبلة',
      'كميات قابلة للتعديل',
      'توصيل كل أسبوعين'
    ],
    price: 'مخصص'
  }
];

const frequencies = [
  { value: 'weekly', label: 'أسبوعياً' },
  { value: 'biweekly', label: 'كل أسبوعين' },
  { value: 'monthly', label: 'شهرياً' }
];

export default function Subscription() {
  const [showManage, setShowManage] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [frequency, setFrequency] = useState('weekly');
  const [currentPlan, setCurrentPlan] = useState(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customSelections, setCustomSelections] = useState(null);

  const handleSubscribe = (plan) => {
    if (plan.id === 'custom') {
      setIsCustomModalOpen(true);
    } else {
      setCurrentPlan(plan);
      setShowManage(true);
    }
  };

  const handleCustomConfirm = (selections) => {
    setCustomSelections(selections);
    setCurrentPlan({
      ...plans.find(p => p.id === 'custom'),
      customSelections: selections
    });
    setShowManage(true);
  };

  const ManageSubscription = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">إدارة الاشتراك</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`flex items-center px-4 py-2 rounded-md ${
              isPaused ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
            }`}
          >
            <Pause className="h-4 w-4 ml-2" />
            {isPaused ? 'استئناف الاشتراك' : 'إيقاف مؤقت'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">تفاصيل الخطة</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-600">الخطة الحالية: {currentPlan?.name}</p>
            <p className="text-gray-600">السعر: {currentPlan?.price} ريال/شهرياً</p>
            <p className="text-gray-600">الحالة: {isPaused ? 'متوقف مؤقتاً' : 'نشط'}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">تكرار التوصيل</h3>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            {frequencies.map((freq) => (
              <option key={freq.value} value={freq.value}>
                {freq.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">التوصيل القادم</h3>
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-gray-500" />
          <span className="text-gray-600">
            {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('ar-SA')}
          </span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="flex items-center text-red-600 hover:text-red-700">
          <Edit2 className="h-4 w-4 ml-2" />
          تعديل تفضيلات التوصيل
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {showManage ? (
          <>
            <ManageSubscription />
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">ترقية الخطة</h2>
              <p className="mt-4 text-gray-500">اختر خطة جديدة للترقية</p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">اشتراكات الدجاج</h1>
            <p className="mt-4 text-xl text-gray-500">اختر الباقة المناسبة لاحتياجاتك</p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <plan.icon className="h-12 w-12 text-red-500" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-6 text-gray-500">{plan.description}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <span className="text-red-400">✓</span>
                      <span className="mr-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {plan.price === 'مخصص' ? plan.price : `${plan.price} ريال`}
                  </span>
                  <span className="text-gray-500">/شهرياً</span>
                </div>
                <button
                  onClick={() => handleSubscribe(plan)}
                  className="mt-8 w-full bg-red-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-red-700 flex items-center justify-center"
                >
                  {showManage ? (
                    <>
                      <ArrowUpRight className="h-5 w-5 ml-2" />
                      ترقية للخطة
                    </>
                  ) : (
                    'اشترك الآن'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <CustomPackModal
          isOpen={isCustomModalOpen}
          onClose={() => setIsCustomModalOpen(false)}
          onConfirm={handleCustomConfirm}
        />
      </div>
    </div>
  );
}