import tabsAll from './tabsAll';
import parseTabsSpv from './parseTabsSpv';

const getTabsDefault = (roles, entity, scope) =>
  parseTabsSpv(roles, entity, tabsAll(entity, scope), scope);

export default getTabsDefault;
