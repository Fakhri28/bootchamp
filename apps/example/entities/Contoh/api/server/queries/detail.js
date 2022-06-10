import Contoh from '../..';

import getProjection from '../../../../../../common/helpers/getProjection';
import ownerQuery from '../../../../../../common/helpers/ownerQuery';
import parsePropsToQueryOptions from '../../../../../../common/helpers/parsePropsToQueryOptions';
import authorizer from '../../../../../../common/helpers/server/authorizer';

import getContohJSONdefs from '../../utils/getJSONdefs';

const action = (options, party, tenant) => {
  const { _id, publishName } = options;
  if (!_id) return undefined;

  const { fields, query } = getContohJSONdefs(publishName, options);
  const projection = getProjection(parsePropsToQueryOptions({ ...options, fields }));
  const selector = {
    ...query,
    ...ownerQuery(tenant.owner),
  };
  return Contoh.findOne(selector, projection);
};

const detailContoh = (options, resolve, reject) => {
  const { publishName } = options;
  try {
    // toggle this if you want to enforce checking args._id
    // const { party, tenant } = authorizer(options, publishName, getContohJSONdefs, checkOptionsArgsId);
    const { party, tenant } = authorizer(options, publishName, getContohJSONdefs);

    resolve(action(options, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    detailContoh(options, resolve, reject);
  });
