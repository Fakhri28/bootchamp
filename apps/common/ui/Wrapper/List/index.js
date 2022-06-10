/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import TableSimpleWithStatus from '../../components/TableSimpleWithStatus';
import PaginationButton from '../../components/PaginationButton';
import Tabs from '../../components/Tabs';
import SEO from '../../components/SEO';

import EntityList from '../../containers/EntityList';

import CommonWrapperDashboard from '../Dashboard';

class CommonWrapperList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    const { currentPageName, currentTabName } = props;

    this.state = {
      currentPage: 1,
      title: `${currentPageName} | ${currentTabName || ''}`,
    };
  }

  render() {
    const {
      Entity,
      parser,
      roles,
      jsonDefs,
      tabs,
      sort,
      perPage,
      settings,
      match,
      history,
      currentPageName,
      currentTabName,
      publishName,
    } = this.props;
    const { WrapperDashboard, ...rest } = this.props;
    const { search, currentPage, title } = this.state;
    const { perPage: perPageSetting } = settings;

    const searchForm = (event) => {
      this.setState({
        search: event.target.value,
        currentPage: 1,
        // FIXME not used currently, consider using this if search trigger change page to save bandwidth and db process
        // title: `${currentPageName} | ${currentTabName} | Search: ${event.target.value}`,
      });
    };

    return (
      <WrapperDashboard searchForm={searchForm} {...rest}>
        <SEO
          title={`${settings && settings.name} | ${title}`}
          path={match.path}
          image={settings.iconUrl}
          twitter={settings.twitter}
        />
        {tabs && <Tabs tabs={tabs} current={currentTabName} history={history} />}
        <EntityList
          Entity={Entity}
          jsonDefs={jsonDefs}
          sort={sort}
          publishName={publishName}
          parser={parser}
          roles={roles}
          componentTable={TableSimpleWithStatus}
          componentPagination={PaginationButton}
          match={match}
          settings={settings}
          search={(search && search.length) >= (settings.minCharSearch || 3) ? search : undefined}
          currentPage={currentPage}
          perPage={perPage || perPageSetting}
          onChangePage={(currentPageNow) =>
            // FIXME title changed but if go back, not trigger the page number. maybe we should consider adding params in path
            this.setState({
              currentPage: currentPageNow,
              title: `${currentPageName} | ${currentTabName || ''} | Page ${currentPageNow}`,
            })
          }
        />
      </WrapperDashboard>
    );
  }
}

CommonWrapperList.defaultProps = {
  tabs: undefined,
  createDoc: undefined,
  perPage: undefined,
  sort: { createdAt: 1 },
  currentTabName: undefined,
  WrapperDashboard: CommonWrapperDashboard,
};

CommonWrapperList.propTypes = {
  Entity: PropTypes.object.isRequired,
  parser: PropTypes.func.isRequired,
  jsonDefs: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object),
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  sort: PropTypes.object,
  perPage: PropTypes.number,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentPageName: PropTypes.string.isRequired,
  currentTabName: PropTypes.string,
  publishName: PropTypes.string.isRequired,
  createDoc: PropTypes.func,
  WrapperDashboard: PropTypes.func,
};

export default CommonWrapperList;
