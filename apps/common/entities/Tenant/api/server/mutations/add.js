import getTenantJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../helpers/server/authorizer';
import createTenant from '../processors/create';

const publishName = 'addTenant';
const addTenant = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getTenantJSONdefs);
    const { args } = options;

    resolve(createTenant(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addTenant(options, resolve, reject);
  });
