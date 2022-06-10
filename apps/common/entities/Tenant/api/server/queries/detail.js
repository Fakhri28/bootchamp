import Tenant from '../..';

import getProjection from '../../../../../helpers/getProjection';
import ownerQuery from '../../../../../helpers/ownerQuery';
import parsePropsToQueryOptions from '../../../../../helpers/parsePropsToQueryOptions';
import authorizer from '../../../../../helpers/server/authorizer';

import getTenantJSONdefs from '../../utils/getJSONdefs';

const action = (options, party, tenant) => {
  const { _id, publishName } = options;
  if (!_id) return undefined;

  const { fields, query } = getTenantJSONdefs(publishName, options);
  const projection = getProjection(parsePropsToQueryOptions({ ...options, fields }));
  const selector = {
    ...query,
    ...ownerQuery(tenant.owner),
  };
  return Tenant.findOne(selector, projection);
};

const detailTenant = (options, resolve, reject) => {
  const { publishName } = options;
  try {
    // toggle this if you want to enforce checking args._id
    // const { party, tenant } = authorizer(options, publishName, getTenantJSONdefs, checkOptionsArgsId);
    const { party, tenant } = authorizer(options, publishName, getTenantJSONdefs);

    resolve(action(options, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    detailTenant(options, resolve, reject);
  });
