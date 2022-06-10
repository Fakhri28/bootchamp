/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import WrapperPublic from '../../Wrapper/Public';

import NewsletterForm from '../../components/NewsletterForm';
import FAQListWithOffset from '../../components/FAQListWithOffset';
import TestimonialWithImage from '../../components/TestimonialWithImage';
import CardListWithSmallIcon from '../../components/CardListWithSmallIcon';
import HeroWithQuoteAndStats from '../../components/HeroWithQuoteAndStats';
import ListSquare from '../../components/ListSquare';

export default function CommonHomePublic(props) {
  return (
    <WrapperPublic currentPageName="Home" {...props}>
      <HeroWithQuoteAndStats />
      <CardListWithSmallIcon />
      <TestimonialWithImage />
      <ListSquare />
      <FAQListWithOffset />
      <NewsletterForm />
    </WrapperPublic>
  );
}
