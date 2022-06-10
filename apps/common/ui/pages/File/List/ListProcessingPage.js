/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import WrapperList from '../../../Wrapper/List';

import File from '../../../../entities/File/api';

import jsonDefsDefault from '../../../../entities/File/api/utils/getJSONdefs';
import parserDefault from '../../../../entities/File/ui/utils/Parser';
import getNavsDefault from '../../Dashboard/getNavsDefault';
import getTabsDefault from '../../Dashboard/getTabsDefault';

import { addFile } from '../../../../entities/File/ui/utils/mutations.gql';

const FileListProcessingPage = (props) => {
  const { roles, jsonDefs, parser, tabs, getNavs, ...rest } = props;
  return (
    <WrapperList
      Entity={File}
      parser={parser}
      jsonDefs={jsonDefs}
      tabs={tabs(roles, 'File')}
      sort={{ createdAt: 1 }}
      currentPageName="File"
      currentTabName="Processing"
      publishName="listFileProcessing"
      navigations={getNavs(roles)}
      roles={roles}
      {...rest}
    />
  );
};

FileListProcessingPage.defaultProps = {
  jsonDefs: jsonDefsDefault,
  parser: parserDefault,
  tabs: getTabsDefault,
  getNavs: getNavsDefault,
};

FileListProcessingPage.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  jsonDefs: PropTypes.func,
  parser: PropTypes.func,
  tabs: PropTypes.func,
  getNavs: PropTypes.func,
};

export default compose(
  graphql(addFile, {
    name: 'createDoc',
    options: ({ history }) => ({
      onCompleted: (mutation) => {
        history.push(`/File/${mutation.addFile._id}`);
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(FileListProcessingPage);
