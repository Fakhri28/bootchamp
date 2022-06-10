import EmailSubscriber from '../..';

import ownerQuery from '../../../../../helpers/ownerQuery';
import entityRemove from '../../../../../helpers/server/entityRemove';

const deleteEmailSubscriber = (args, party, tenant) => {
  const query = {
    _id: args._id,
    status: 'Draft',
    ...ownerQuery(tenant.owner),
  };

  entityRemove(EmailSubscriber, query, 'Delete EmailSubscriber permanently', party);
  return { _id: args._id };
};

export default deleteEmailSubscriber;
