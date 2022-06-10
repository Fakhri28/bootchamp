const tabsAll = [
  { _id: 1, name: 'Draft', linkUrl: '/Contoh/List/Draft' },
  { _id: 2, name: 'Current', linkUrl: '/Contoh/List/Current' },
];

const tabsSpv = [
  { _id: 1, name: 'Draft', linkUrl: '/Contoh/List/Draft' },
  { _id: 2, name: 'Current', linkUrl: '/Contoh/List/Current' },
  { _id: 3, name: 'History', linkUrl: '/Contoh/List/History' },
  { _id: 99, name: 'Processing', linkUrl: '/Contoh/List/Processing' },
];

const tabs = (roles) =>
  roles.indexOf('spv') > -1 || roles.indexOf('admin') > -1 ? tabsSpv : tabsAll;

export default tabs;
