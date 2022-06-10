import Tenant from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createTenant = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Manual', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(Tenant, doc, 'Create new Tenant', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createTenant;
