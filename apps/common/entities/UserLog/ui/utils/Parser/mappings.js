import { iso } from '../../../../../helpers/dates';

// put fields that needed in ALL List
const mappingsUserLogParser = (settings) => [
  { from: '_id', to: '_id' },
  { from: 'name', to: 'name' },
  { from: 'userLog', to: 'userLog' },
  { from: 'type', to: 'type' },
  { from: 'status', to: 'status' },
  {
    from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
    to: 'updatedAt',
  },
  {
    from: (doc) => `/UserLog/${doc._id}`,
    to: 'linkUrl',
  },
];

export default mappingsUserLogParser;
