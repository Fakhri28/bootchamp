import tabsWithWaitingApproval from './tabsWithWaitingApproval';
import parseTabsSpv from './parseTabsSpv';

const getTabsWithWaitingApproval = (roles, entity, scope) =>
  parseTabsSpv(roles, entity, tabsWithWaitingApproval(entity, scope), scope);

export default getTabsWithWaitingApproval;
