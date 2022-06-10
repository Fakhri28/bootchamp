/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CategoryDetail from '../../components/Category/Detail';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CategoryDetailPage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-4 sm:px-6 sm:py-4">
          <div className="mt-8">
            <h2 className="sr-only">Recent orders</h2>
            <CategoryDetail
              orders={[
                {
                  _id: '4',
                  number: 'WU88191122',
                  date: 'January 23, 2021',
                  datetime: '2021-01-22',
                  href: '#',
                  invoiceHref: '#',
                  total: '$302.00',
                  products: [
                    {
                      id: 2,
                      name: 'MELON',
                      description:
                        'Kaos untuk cewek, bahan cotton combed 30s (karakteristik tidak tebal dan tidak tipis nyaman di pakai untuk musim di indonesia), tekstur bahan halus, tangan pendek model kerah oneck/bulat, cocok untuk dipakai daily wear 💯',
                      href: '#',
                      price: '7900000',
                      status: 'out-for-delivery',
                      date: 'January 5, 2021',
                      datetime: '2021-01-05',
                      imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
                      imageAlt:
                        'Olive drab green insulated bottle with flared screw lid and flat top.',
                    },
                    // More products...
                  ],
                },
                {
                  _id: '3',
                  number: 'WU88191122',
                  date: 'January 23, 2021',
                  datetime: '2021-01-22',
                  href: '#',
                  invoiceHref: '#',
                  total: '$302.00',
                  products: [
                    {
                      id: 2,
                      name: 'LABU',
                      description:
                        'Kaos untuk cewek, bahan cotton combed 30s (karakteristik tidak tebal dan tidak tipis nyaman di pakai untuk musim di indonesia), tekstur bahan halus, tangan pendek model kerah oneck/bulat, cocok untuk dipakai daily wear 💯',
                      href: '#',
                      price: '7900000',
                      status: 'out-for-delivery',
                      date: 'January 5, 2021',
                      datetime: '2021-01-05',
                      imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
                      imageAlt:
                        'Olive drab green insulated bottle with flared screw lid and flat top.',
                    },
                    // More products...
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
