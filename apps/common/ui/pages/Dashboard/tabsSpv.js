const tabsSpv = (entity, scope) => [
  {
    _id: 'History',
    name: 'History',
    linkUrl: `/${entity}/List/History${scope ? `/${scope}` : ''}`,
  },
  {
    _id: 'Processing',
    name: 'Processing',
    linkUrl: `/${entity}/List/Processing${scope ? `/${scope}` : ''}`,
  },
];

export default tabsSpv;
