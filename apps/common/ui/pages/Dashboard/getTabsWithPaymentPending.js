import tabsAll from './tabsWithPaymentPending';
import parseTabsSpv from './parseTabsSpv';

const getTabsWithPaymentPending = (roles, entity, scope) =>
  parseTabsSpv(roles, entity, tabsAll(entity, scope), scope);

export default getTabsWithPaymentPending;
