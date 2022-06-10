import React from 'react';
import ProductList from '../../components/Product/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductListPage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
        </div>
        <ProductList />
      </div>
      <Footer />
    </>
  );
}
