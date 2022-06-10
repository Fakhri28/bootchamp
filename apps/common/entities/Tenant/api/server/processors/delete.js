import Tenant from '../..';

import ownerQuery from '../../../../../helpers/ownerQuery';
import entityRemove from '../../../../../helpers/server/entityRemove';

const deleteTenant = (args, party, tenant) => {
  const query = {
    _id: args._id,
    status: 'Draft',
    ...ownerQuery(tenant.owner),
  };

  entityRemove(Tenant, query, 'Delete Tenant permanently', party);
  return { _id: args._id };
};

export default deleteTenant;
