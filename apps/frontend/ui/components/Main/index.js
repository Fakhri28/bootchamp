import React from 'react';
// import PropTypes from 'prop-types';
import ListCategory from '../Category/List';
import ListItem from '../Item/List';
import HeroFull from '../Hero/Full';
import HeroGrid from '../Hero/Grid';

export default function Main() {
  return (
    <main>
      <HeroFull
        imgUrl="/lelang/hero1.jpg"
        title="Tunggukanlah Info Berikutnya!!!"
        synopsis="Lelang BMN KPUBC TIPE A TANJUNG PRIOK"
        buttonLabel="Baca Pengumuman"
        buttonUrl="/announcement"
      />
      <ListItem
        title="Daftar Lot"
        linkUrl="/Item"
        linkLabel="Lihat semua Lot"
        collections={[
          {
            name: 'Lot 1: Barang Industrial',
            href: '/Item',
            imageSrc: '/lelang/vespa1.jpg',
            imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
            description:
              'Keep your phone, keys, and wallet together, so you can lose everything at once.',
          },
          {
            name: 'Lot 2: Motor',
            href: '/Item',
            imageSrc: '/lelang/motor2.jpg',
            imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
            description:
              'The rest of the house will still be a mess, but your desk will look great.',
          },
          {
            name: 'Lot 3: Mesin Fotokopi',
            href: '/Item',
            imageSrc: '/lelang/fotokopi.jpg',
            imageAlt:
              'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
            description:
              'Be more productive than enterprise project managers with a single piece of paper.',
          },
        ]}
      />
      <ListCategory
        categories={[
          {
            name: 'Mobil',
            href: '/',
            imageSrc: '/lelang/mobil.jpg',
          },
          {
            name: 'Motor',
            href: '/',
            imageSrc: '/lelang/motor.jpg',
          },
          {
            name: 'Spare Parts',
            href: '/',
            imageSrc: '/lelang/sparepart.jpg',
          },
          {
            name: 'Industri',
            href: '/',
            imageSrc: '/lelang/industri.jpg',
          },
          {
            name: 'Kain',
            href: '/',
            imageSrc: '/lelang/kain.jpg',
          },
        ]}
      />
      <HeroGrid
        imgUrl="/lelang/hero2.jpg"
        title="Daftarlah Sekarang"
        synopsis="Dengan menjadi anggota Lelang Raya, maka anda akan mendapatkan info terkini tentang lelang-lelang yang akan diselenggarakan"
        buttonLabel="Daftar"
        buttonUrl="/"
      />
    </main>
  );
}

Main.defaultProps = {};

Main.propTypes = {
  // settings: PropTypes.object.isRequired,
};
