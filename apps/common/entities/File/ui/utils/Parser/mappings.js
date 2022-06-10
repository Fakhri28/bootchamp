import { iso } from '../../../../../helpers/dates';

// put fields that needed in ALL List
const mappingsFileParser = (settings) => [
  { from: '_id', to: '_id' },
  { from: 'name', to: 'name' },
  { from: 'fsUrl', to: 'fsUrl' },
  { from: 'localUrl', to: 'localUrl' },
  { from: 'cloudUrl', to: 'cloudUrl' },
  { from: 'size', to: 'size' },
  { from: 'mimeType', to: 'mimeType' },
  { from: 'typeId', to: 'typeId' },
  { from: 'type', to: 'type' },
  { from: 'description', to: 'description' },
  {
    from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
    to: 'updatedAt',
  },
  {
    from: (doc) => `/File/${doc._id}`,
    to: 'linkUrl',
  },
];

export default mappingsFileParser;
