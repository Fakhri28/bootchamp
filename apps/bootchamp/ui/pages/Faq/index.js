/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Faqs(props) {
  const { faqs } = props;
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform',
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

Faqs.defaultProps = {
  faqs: [
    {
      question:
        'Bagaimana cara tahu bahwa barang yang saya cari masih ada stoknya atau sudah habis?',
      answer:
        'Untuk informasi ketersediaan stok, silahkan cari barang tersebut ditempat pencarian yang telah disediakan. Bila ditemukan, klik pada barang tersebut untuk melihat detail info. Pada halaman produk, akan tertera informasi ketersediaan barang tersebut, yaitu Stok ready. Bila stok habis, maka Stok ready akan berisi Out Of Stock. Pada halaman depan (home) untuk barang yang habis (out of stok) akan tampak pita Out Of Stock berwarna ungu pada gambar barangnya.',
    },
    {
      question: 'Bagaimana cara melakukan pembelian / pemesanan barang ?',
      answer: 'Cara pesan/beli barang bisa Anda lihat secara lengkap pada halaman Help',
    },
    {
      question: 'Bagaimana cara pembayarannya ?',
      answer:
        'Untuk saat ini kami menerima pembayaran dengan metode Transfer antar Bank. Kami memiliki rekening bank BCA, Mandiri, dan CIMB Niaga. Untuk informasi nomor rekening bisa ditanyakan  melalui kontak langsung dengan kami di BBM/Whatsapp/LINE. Karena kami menggunakan kurir untuk melakukan pengiriman, maka kami meminta pembayaran harus dilakukan dimuka (sebelum barang pesanan kami kirim kepada Anda).',
    },
    // More questions...
  ],
};

Faqs.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object),
};
