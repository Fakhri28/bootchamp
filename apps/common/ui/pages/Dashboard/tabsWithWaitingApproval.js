import tabsWithWaitingApprovalWithoutCurrent from './tabsWithWaitingApprovalWithoutCurrent';

const tabsWithWaitingApproval = (entity, scope) => [
  ...tabsWithWaitingApprovalWithoutCurrent(entity, scope),
  {
    _id: 'Current',
    name: 'Current',
    linkUrl: `/${entity}/List/Current${scope ? `/${scope}` : ''}`,
  },
];

export default tabsWithWaitingApproval;
