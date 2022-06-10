import tabsWithWaitingApprovalWithoutCurrent from './tabsWithWaitingApprovalWithoutCurrent';
import parseTabsSpv from './parseTabsSpv';

const getTabsWithWaitingApprovalWithoutCurrent = (roles, entity, scope) =>
  parseTabsSpv(roles, entity, tabsWithWaitingApprovalWithoutCurrent(entity, scope), scope);

export default getTabsWithWaitingApprovalWithoutCurrent;
