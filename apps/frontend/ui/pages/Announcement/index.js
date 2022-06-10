/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import FrontendWrapper from '../../components/Wrapper';

export default function AnnouncementPage(props) {
  return (
    <FrontendWrapper currentPageName="Home" {...props}>
      <div align="center">
        <img src="/lelang/pengumuman.jpg" alt="pengumuman" />
      </div>
    </FrontendWrapper>
  );
}
