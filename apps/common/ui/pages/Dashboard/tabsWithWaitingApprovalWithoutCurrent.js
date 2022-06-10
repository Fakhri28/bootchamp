const tabsWithWaitingApprovalWithoutCurrent = (entity, scope) => [
  { _id: 'Draft', name: 'Draft', linkUrl: `/${entity}/List/Draft${scope ? `/${scope}` : ''}` },
  {
    _id: 'WaitingApproval',
    name: 'WaitingApproval',
    linkUrl: `/${entity}/List/WaitingApproval${scope ? `/${scope}` : ''}`,
  },
];

export default tabsWithWaitingApprovalWithoutCurrent;
