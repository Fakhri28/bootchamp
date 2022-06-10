import tabsSpv from './tabsSpv';

const parseTabsSpv = (roles, entity, tabs, scope) =>
  roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1
    ? [...tabs, ...tabsSpv(entity, scope)]
    : tabs;

export default parseTabsSpv;
