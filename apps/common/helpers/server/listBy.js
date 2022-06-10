import getProjection from '../getProjection';
import ownerQuery from '../ownerQuery';
import parsePropsToQueryOptions from '../parsePropsToQueryOptions';

import authorizer from './authorizer';

const action = (publishName, args, tenant, Entity, getJSONdefs, withoutOwnerQuery) => {
  const { fields, query } = getJSONdefs(publishName, args, tenant);
  const options = parsePropsToQueryOptions({ ...args, fields });
  const queries = withoutOwnerQuery
    ? query
    : {
        ...query,
        ...ownerQuery(tenant.owner),
      };
  const projection = getProjection(options);
  const results = Entity.find(queries, projection).fetch();
  return results.length > 0 ? results : undefined;
};

const listBy = (publishName, args, resolve, reject, Entity, getJSONdefs, withoutOwnerQuery) => {
  try {
    const { tenant } = authorizer(args, publishName, getJSONdefs);
    resolve(action(publishName, args, tenant, Entity, getJSONdefs, withoutOwnerQuery));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default listBy;
