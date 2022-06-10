import tabsAll from './tabsAll';
import parseTabsSpv from './parseTabsSpv';

const getTabsWithInactive = (roles, entity, scope) =>
  parseTabsSpv(
    roles,
    entity,
    [
      ...tabsAll(entity, scope),
      {
        _id: 'Inactive',
        name: 'Inactive',
        linkUrl: `/${entity}/List/Inactive${scope ? `/${scope}` : ''}`,
      },
    ],
    scope,
  );

export default getTabsWithInactive;
