import { Roles } from 'meteor/alanning:roles';

import Org from '../..';

import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseDotToUnderscore from '../../../../../helpers/parseDotToUnderscore';
import addCharToString from '../../../../../helpers/addCharToString';
import getAndIncreaseCounter from '../../../../Counter/api/server/processors/getAndIncreaseCounter';

const processOrgToActive = (org, party, tenant) => {
  // now do last check
  if (org.status === 'Processing')
    throw new Error('SalesOrder is in other process. Please wait and repeat');

  if (!(org.status === 'Draft' || org.status === 'Queue' || org.status === 'Closed'))
    throw new Error(`Org status: ${org.status} may not be set to Active`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Org,
    { _id: org._id },
    {
      status: 'Processing',
    },
    'Processing processOrgToActive',
    party,
  );

  const now = new Date();

  const doc = {
    status: 'Active',
  };
  doc[`hosts.${parseDotToUnderscore(tenant.host)}.status`] = 'Active';
  doc[`hosts.${parseDotToUnderscore(tenant.host)}.activedAt`] = now;
  doc[`hosts.${parseDotToUnderscore(tenant.host)}.activedBy`] = party.name;

  if (tenant.settings.bcava)
    doc.bcaCustomerNumber = `${tenant.settings.bcava}${addCharToString(
      5,
      getAndIncreaseCounter(
        `${tenant.owner.name} - ParentOrg`,
        'BcaVaNumber',
        'Active',
        party,
        tenant.owner,
      ).counter,
    )}${addCharToString(
      3,
      getAndIncreaseCounter(
        `${tenant.owner.name} - ${org.name}`,
        'BcaVaNumber',
        'Active',
        party,
        tenant.owner,
      ).counter,
    )}`;

  entityUpdate(Org, { _id: org._id }, doc, 'Set Org to Active', party, now);

  Roles.addUsersToRoles(`${org._id}.org`, tenant.rolesOrgInTenant[0], tenant.host); // just get the first role

  return { _id: org._id };
};

export default processOrgToActive;
