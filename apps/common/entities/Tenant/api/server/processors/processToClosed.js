import Tenant from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processTenantToClosed = (tenant, party) => {
  if (tenant.status === 'Processing')
    throw new Error('Tenant is in other process. Please wait and repeat');

  // if (!(tenant.status === 'Active' || tenant.status === 'Delivering'))
  if (tenant.status !== 'Active')
    throw new Error(`Tenant status: ${tenant.status} may not be set to Closed`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Tenant,
    { _id: tenant._id },
    {
      status: 'Processing',
    },
    'Processing processTenantToClosed',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    Tenant,
    { _id: tenant._id },
    {
      status: 'Closed',
    },
    'Set Tenant Status to Closed',
    party,
    timestamp,
  );

  return { _id: tenant._id, status: 'Closed' };
};

export default processTenantToClosed;
