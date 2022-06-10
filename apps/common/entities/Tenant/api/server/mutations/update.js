import Tenant from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getTenantJSONdefs from '../../utils/getJSONdefs';

import editTenant from '../processors/edit';

const publishName = 'updateTenant';
const updateTenant = (options, resolve, reject) => {
  try {
    const { party } = authorizer(options, publishName, getTenantJSONdefs, checkOptionsArgsId);
    const { args } = options;

    const tenant = Tenant.findOne({
      _id: args._id,
    });
    if (!tenant) throw new Error(`[${publishName}] Tenant not found`);

    resolve(editTenant(args, tenant, party));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    updateTenant(options, resolve, reject);
  });
