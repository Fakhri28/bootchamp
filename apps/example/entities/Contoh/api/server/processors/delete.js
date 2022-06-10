import Contoh from '../..';

import ownerQuery from '../../../../../../common/helpers/ownerQuery';
import entityRemove from '../../../../../../common/helpers/server/entityRemove';

const deleteContoh = (args, party, tenant) => {
  const query = {
    _id: args._id,
    status: 'Draft',
    ...ownerQuery(tenant.owner),
  };

  entityRemove(Contoh, query, 'Delete Contoh permanently', party);
  return { _id: args._id };
};

export default deleteContoh;
