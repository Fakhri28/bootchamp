import tabsWithWaitingApprovalWithoutCurrent from './tabsWithWaitingApprovalWithoutCurrent';

const tabsWithPaymentPending = (entity, scope) => [
  ...tabsWithWaitingApprovalWithoutCurrent(entity, scope),
  {
    _id: 'PaymentPending',
    name: 'PaymentPending',
    linkUrl: `/${entity}/List/PaymentPending${scope ? `/${scope}` : ''}`,
  },
  {
    _id: 'Current',
    name: 'Current',
    linkUrl: `/${entity}/List/Current${scope ? `/${scope}` : ''}`,
  },
];

export default tabsWithPaymentPending;
