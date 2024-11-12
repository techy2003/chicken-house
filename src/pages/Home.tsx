import React from 'react';
import Hero from '../components/Hero';
import MonthlyOffer from '../components/MonthlyOffer';
import Features from '../components/Features';
import ProductCategories from '../components/ProductCategories';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <MonthlyOffer />
      <Features />
      <ProductCategories />
      <Testimonials />
    </div>
  );
}