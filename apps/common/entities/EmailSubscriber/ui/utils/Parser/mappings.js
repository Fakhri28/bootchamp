import { iso } from '../../../../../helpers/dates';

// put fields that needed in ALL List
const mappingsEmailSubscriberParser = (settings) => [
  { from: '_id', to: '_id' },
  { from: 'name', to: 'name' },
  { from: 'email', to: 'email' },
  { from: 'type', to: 'type' },
  { from: 'status', to: 'status' },
  {
    from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
    to: 'updatedAt',
  },
  {
    from: (doc) => `/EmailSubscriber/${doc._id}`,
    to: 'linkUrl',
  },
];

export default mappingsEmailSubscriberParser;
