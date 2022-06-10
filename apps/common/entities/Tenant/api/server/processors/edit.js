import Tenant from '../..';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editTenant = (args, tenant, party) => {
  if (tenant.status === 'Processing')
    throw new Error('Tenant is in other process. Please wait and repeat');

  if (!(tenant.status === 'Draft' || tenant.status === 'Queue'))
    throw new Error(`Tenant status: ${tenant.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Tenant,
    { _id: tenant._id },
    {
      status: 'Processing',
    },
    'Processing editTenant',
    party,
  );

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, tenant), tenant);

  entityUpdate(
    Tenant,
    { _id: tenant._id },
    { ...doc, status: tenant.status },
    `Tenant updated, status back to ${tenant.status}`,
    party,
  );
  return Tenant.findOne(tenant._id);
};

export default editTenant;
