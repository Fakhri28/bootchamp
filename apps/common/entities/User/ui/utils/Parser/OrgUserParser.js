import parseDocs from '../../../../../helpers/parseDocs';

const OrgUserParser = (docs, roles) => {
  return parseDocs(docs, [
    { from: '_id', to: '_id' },
    { from: 'fullname', to: 'fullname' },
    {
      from: (doc) => doc.roles.map((role) => (role.defaultChecked ? `${role.value} ` : '')),
      to: 'roles',
    },
    {
      from: (doc) => {
        const status = doc.status && doc.status.online ? 'Online' : 'Offline';
        const idle = doc.status && doc.status.idle ? 'Idle' : 'Active';
        return `${status}${status === 'Online' ? `_${idle}` : ''}`;
      },
      to: 'status',
    },
    {
      from: (doc) => (roles.indexOf('admin') > -1 ? `/User/${doc._id}` : '#'),
      to: 'linkUrl',
    },
  ]);
};

export default OrgUserParser;
