import { iso } from '../../../../../helpers/dates';

// put fields that needed in ALL List
const mappingsNotificationParser = (settings) => [
  { from: '_id', to: '_id' },
  { from: 'name', to: 'name' },
  { from: 'host', to: 'host' },
  { from: 'from', to: 'from' },
  { from: 'to', to: 'to' },
  { from: 'description', to: 'description' },
  {
    from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
    to: 'updatedAt',
  },
  {
    from: (doc) => `/Notification/${doc._id}`,
    to: 'linkUrl',
  },
];

export default mappingsNotificationParser;
