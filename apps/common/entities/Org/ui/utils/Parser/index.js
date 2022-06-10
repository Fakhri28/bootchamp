import parseDocs from '../../../../../helpers/parseDocs';
import { iso } from '../../../../../helpers/dates';

const Index = (docs, settings) => {
  return parseDocs(docs, [
    { from: '_id', to: '_id' },
    { from: 'name', to: 'name' },
    { from: (doc) => doc.address?.phone, to: 'phone' },
    { from: 'nr', to: 'nr' },
    { from: 'type', to: 'type' },
    { from: 'status', to: 'status' },
    {
      from: (doc) => doc.updatedAt && iso(doc.updatedAt, settings.timezone, 'LLLL'),
      to: 'updatedAt',
    },
    {
      from: (doc) => `/Org/${doc._id}`,
      to: 'linkUrl',
    },
  ]);
};

export default Index;
