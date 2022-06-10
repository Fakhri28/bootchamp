import UserSetting from '../..';

import getProjection from '../../../../../helpers/getProjection';
import ownerQuery from '../../../../../helpers/ownerQuery';
import parsePropsToQueryOptions from '../../../../../helpers/parsePropsToQueryOptions';
import authorizer from '../../../../../helpers/server/authorizer';

import getUserSettingJSONdefs from '../../utils/getJSONdefs';

const action = (options, party, tenant) => {
  const { _id, publishName } = options;
  if (!_id) return undefined;

  const { fields, query } = getUserSettingJSONdefs(publishName, options);
  const projection = getProjection(parsePropsToQueryOptions({ ...options, fields }));
  const selector = {
    ...query,
    ...ownerQuery(tenant.owner),
  };
  return UserSetting.findOne(selector, projection);
};

const detailUserSetting = (options, resolve, reject) => {
  const { publishName } = options;
  try {
    // toggle this if you want to enforce checking args._id
    // const { party, tenant } = authorizer(options, publishName, getUserSettingJSONdefs, checkOptionsArgsId);
    const { party, tenant } = authorizer(options, publishName, getUserSettingJSONdefs);

    resolve(action(options, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    detailUserSetting(options, resolve, reject);
  });
