import { iso } from '../../../../../helpers/dates';

// put fields that needed in ALL List
const mappingsCounterParser = (settings) => [
  { from: '_id', to: '_id' },
  { from: 'name', to: 'name' },
  { from: 'counter', to: 'counter' },
  { from: 'type', to: 'type' },
  { from: 'status', to: 'status' },
  {
    from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
    to: 'updatedAt',
  },
  {
    from: (doc) => `/Counter/${doc._id}`,
    to: 'linkUrl',
  },
];

export default mappingsCounterParser;
