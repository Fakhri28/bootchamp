import tabsAll from './tabsAll';
import parseTabsSpv from './parseTabsSpv';

const getTabsWithCurrentFeature = (roles, entity, scope) =>
  parseTabsSpv(
    roles,
    entity,
    [
      ...tabsAll(entity, scope),
      {
        _id: 'CurrentFeature',
        name: 'CurrentFeature',
        linkUrl: `/${entity}/List/CurrentFeature${scope ? `/${scope}` : ''}`,
      },
    ],
    scope,
  );

export default getTabsWithCurrentFeature;
