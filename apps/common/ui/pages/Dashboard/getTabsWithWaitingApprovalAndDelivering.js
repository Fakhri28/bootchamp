import tabsWithWaitingApproval from './tabsWithWaitingApproval';
import parseTabsSpv from './parseTabsSpv';

const getTabsWithWaitingApproval = (roles, entity, scope) =>
  parseTabsSpv(
    roles,
    entity,
    [
      ...tabsWithWaitingApproval(entity, scope),
      {
        _id: 'Delivering',
        name: 'Delivering',
        linkUrl: `/${entity}/List/Delivering${scope ? `/${scope}` : ''}`,
      },
    ],
    scope,
  );

export default getTabsWithWaitingApproval;
