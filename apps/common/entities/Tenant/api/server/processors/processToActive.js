import Tenant from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processTenantToActive = (tenant, party) => {
  if (tenant.status === 'Processing')
    throw new Error('Tenant is in other process. Please wait and repeat');

  if (!(tenant.status === 'Draft' || tenant.status === 'Queue' || tenant.status === 'Closed'))
    throw new Error(`Tenant status: ${tenant.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Tenant,
    { _id: tenant._id },
    {
      status: 'Processing',
    },
    'Processing processTenantToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    Tenant,
    { _id: tenant._id },
    {
      status: 'Active',
    },
    'Set Tenant Status to Active',
    party,
    timestamp,
  );

  return { _id: tenant._id, status: 'Active' };
};

export default processTenantToActive;
