const tabsAll = (entity, scope) => [
  { _id: 1, name: 'Online', linkUrl: `/${entity}/List/Online${scope ? `/${scope}` : ''}` },
];

const tabsSpv = (entity, scope) => [
  { _id: 2, name: 'Unverified', linkUrl: `/${entity}/List/Unverified${scope ? `/${scope}` : ''}` },
  {
    _id: 3,
    name: 'WaitingApproval',
    linkUrl: `/${entity}/List/WaitingApproval${scope ? `/${scope}` : ''}`,
  },
  { _id: 4, name: 'Approved', linkUrl: `/${entity}/List/Approved${scope ? `/${scope}` : ''}` },
  { _id: 5, name: 'All', linkUrl: `/${entity}/List/All${scope ? `/${scope}` : ''}` },
];

const getUserHostTabs = (roles, entity, scope) =>
  roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1
    ? [...tabsAll(entity, scope), ...tabsSpv(entity, scope)]
    : tabsAll(entity, scope);

export default getUserHostTabs;
