import parseDocs from '../../../../../helpers/parseDocs';

const OrgParserSalesOrder = (docs) => {
  return parseDocs(docs, [
    { from: '_id', to: '_id' },
    { from: 'name', to: 'name' },
    { from: (doc) => doc.address?.address, to: 'address' },
    { from: 'type', to: 'type' },
    { from: (doc) => doc.address?.phone, to: 'phone' },
    {
      from: (doc) => `/SalesOrder/Buyer/${doc._id}`,
      to: 'linkUrl',
    },
  ]);
};

export default OrgParserSalesOrder;
