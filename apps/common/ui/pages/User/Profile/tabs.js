const tabsSelf = [
  { _id: 1, name: 'Profile', linkUrl: '/profile' },
  { _id: 2, name: 'Roles', linkUrl: '/roles' },
  { _id: 3, name: 'ID Card', linkUrl: '/idcard' },
];

const tabs = (userId) => [
  { _id: 1, name: 'Profile', linkUrl: `/User/${userId}` },
  { _id: 2, name: 'Roles', linkUrl: `/User/${userId}/Roles` },
  { _id: 3, name: 'ID Card', linkUrl: `/User/${userId}/idcard` },
];

export default (userId) => (userId ? tabs(userId) : tabsSelf);
