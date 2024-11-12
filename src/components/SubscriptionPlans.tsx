import React from 'react';
import { Dumbbell, Users, Settings } from 'lucide-react';

const plans = [
  {
    name: 'Gym Pack',
    icon: Dumbbell,
    description: 'High-protein chicken breasts for fitness enthusiasts',
    features: [
      'Premium chicken breasts',
      'Portion-controlled packs',
      'Nutritional information',
      'Weekly delivery'
    ],
    price: '299'
  },
  {
    name: 'Family Favorites',
    icon: Users,
    description: 'Perfect variety for the whole family',
    features: [
      'Wings and drumsticks',
      'Whole chickens',
      'Cooking tips included',
      'Flexible delivery'
    ],
    price: '399'
  },
  {
    name: 'Custom Pack',
    icon: Settings,
    description: 'Build your own subscription',
    features: [
      'Choose your cuts',
      'Raw or marinated options',
      'Adjustable quantities',
      'Bi-weekly delivery'
    ],
    price: 'Custom'
  }
];

export default function SubscriptionPlans() {
  return (
    <div id="subscription" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select from our carefully curated subscription options
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
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
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {typeof plan.price === 'string' ? 
                      (plan.price === 'Custom' ? plan.price : `SAR ${plan.price}`) : 
                      `SAR ${plan.price}`}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <a
                  href="#"
                  className="mt-8 block w-full bg-red-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-red-700"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}