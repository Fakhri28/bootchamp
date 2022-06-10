import { iso } from '../../../../../../common/helpers/dates';

// put fields that needed in ALL List
const mappingsContohParser = (settings) => [
  { from: '_id', to: '_id' },
  { from: 'nr', to: 'nr' },
  { from: 'name', to: 'name' },
  {
    from: (doc) =>
      doc.amount &&
      doc.amount.toLocaleString('id', {
        style: 'currency',
        currency: doc.currency || settings.currency || 'IDR',
        maximumFractionDigits: settings.maximumFractionDigits,
        minimumFractionDigits: settings.minimumFractionDigits,
      }),
    to: 'amount',
  },
  {
    from: (doc) => doc.contohDate && iso(doc.contohDate, settings.timezone, 'LLLL'),
    to: 'contohDate',
  },
  { from: 'type', to: 'type' },
  { from: 'status', to: 'status' },
  {
    from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
    to: 'updatedAt',
  },
  {
    from: (doc) => `/Contoh/${doc._id}`,
    to: 'linkUrl',
  },
];

export default mappingsContohParser;
