/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ProductList from '../../components/Product/ListVertical';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductListPage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="py-6 sm:py-6 xl:max-w-7xl xl:mx-auto xl:px-8">
          <ProductList
            judul="Untukmu Para Pria"
            productsman={[
              {
                id: 1,
                name: 'Hugo Boss',
                href: '/productdetail',
                imageSrc: '/bootchamp/pic1.jpeg',
                imageAlt: 'Mens Plain Gentlemanlike Vintage Solid Color Corduroy Long Sleeve Shirt',
                price: '500000',
                color: 'VNF FastDry WAVE Tee',
              },
              {
                id: 2,
                name: 'Tommy Hilfiger',
                href: '/productdetail',
                imageSrc: '/bootchamp/pic4.jpeg',
                imageAlt: 'Mens Corduroy Patchwork Double Chest Pockets Long Sleeve Shirts',
                price: '560000',
                color: 'Noxy T-Shirt Catch A Wave',
              },
              {
                id: 3,
                name: 'Lacoste',
                href: '/productdetail',
                imageSrc: '/bootchamp/pic2.jpeg',
                imageAlt: 'Mens Corduroy Colorblock Stitching Drawstring Hooded Shirt With Pocket',
                price: '700000',
                color: 'Noxy T-Shirt Road',
              },
              {
                id: 4,
                name: 'Versace',
                href: '/productdetail',
                imageSrc: '/bootchamp/pic3.jpeg',
                imageAlt: 'Mens Corduroy Color Block Panel Stitching Casual Long Sleeve Shirts',
                price: '590000',
                color: 'Noxy T-Shirt Summer Time',
              },
            ]}
          />
          <ProductList
            judul="Untukmu Para Wanita"
            productswoman={[
              {
                id: 1,
                name: 'Cammomile',
                href: '/productdetail',
                imageSrc:
                  'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '508000',
                color: 'Basic Ladies T-Shirt - Oneck',
              },
              {
                id: 2,
                name: 'Uniqlo',
                href: '/productdetail',
                imageSrc:
                  'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '1000000',
                color: 'Kaos Wanita UNIQL0',
              },
              {
                id: 3,
                name: 'Colorbox',
                href: '/productdetail',
                imageSrc:
                  'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '900000',
                color: 'AUTUMN EMBROIDERY TEE',
              },
              {
                id: 4,
                name: 'Miniso',
                href: '/productdetail',
                imageSrc:
                  'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '510000',
                color: 'MONSOON TOP - Hijau',
                // More products...
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
