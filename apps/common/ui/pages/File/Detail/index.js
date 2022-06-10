/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import WrapperDashboard from '../../../Wrapper/Dashboard';

import FileDetail from '../../../../entities/File/ui/components/Detail';

export default function FileDetailPage(props) {
  const { roles, ...rest } = props;
  return (
    <WrapperDashboard currentPageName="File" roles={roles} {...rest}>
      <FileDetail {...props} />
    </WrapperDashboard>
  );
}

FileDetailPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
