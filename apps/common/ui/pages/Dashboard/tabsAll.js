const tabsAll = (entity, scope) => [
  { _id: 'Draft', name: 'Draft', linkUrl: `/${entity}/List/Draft${scope ? `/${scope}` : ''}` },
  {
    _id: 'Current',
    name: 'Current',
    linkUrl: `/${entity}/List/Current${scope ? `/${scope}` : ''}`,
  },
];

export default tabsAll;
