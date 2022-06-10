/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../components/Product/ListVertical';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PromoListPage(props) {
  const { productsman } = props;
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="py-6 sm:py-6 xl:max-w-7xl xl:mx-auto xl:px-8">
          <ProductList judul="Promo Hari Ini!" listProduct={productsman} />
        </div>
      </div>
      <Footer />
    </>
  );
}

PromoListPage.defaultProps = {
  productsman: [
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
  ],
};

PromoListPage.propTypes = {
  productsman: PropTypes.arrayOf(PropTypes.object),
};
