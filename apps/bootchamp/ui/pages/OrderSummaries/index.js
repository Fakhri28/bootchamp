import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderSummaries from '../../components/OrderSummaries';

export default function OrderSummariesPage() {
  return (
    <>
      <Header />
      <OrderSummaries
        products={[
          {
            id: 1,
            name: 'test sofi',
            description:
              'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
            href: '#',
            quantity: 1,
            price: '$32.00',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
            imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
          },
        ]}
      />
      <Footer />
    </>
  );
}
