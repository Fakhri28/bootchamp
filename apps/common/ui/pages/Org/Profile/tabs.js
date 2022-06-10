const tabs = (_id) => [
  { _id: 1, name: 'Profile', linkUrl: `/Org/${_id}` },
  { _id: 2, name: 'Roles', linkUrl: `/Org/${_id}/Roles` },
  { _id: 3, name: 'Users', linkUrl: `/Org/${_id}/Users` },
];

export default (_id) => tabs(_id);
