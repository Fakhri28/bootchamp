import Tenant from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getTenantJSONdefs from '../../utils/getJSONdefs';

import processTenantToDraft from '../processors/processToDraft';

const publishName = 'setTenantStatusToDraft';
const setTenantStatusToDraft = (options, resolve, reject) => {
  try {
    const { party } = authorizer(options, publishName, getTenantJSONdefs, checkOptionsArgsId);
    const { args } = options;

    const tenant = Tenant.findOne({
      _id: args._id,
    });
    if (!tenant) throw new Error(`[${publishName}] Tenant not found`);

    resolve(processTenantToDraft(tenant, party));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    setTenantStatusToDraft(options, resolve, reject);
  });
