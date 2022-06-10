import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getTenantJSONdefs from '../../utils/getJSONdefs';

import deleteTenant from '../processors/delete';

const publishName = 'removeTenant';
const removeTenant = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getTenantJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    resolve(deleteTenant(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeTenant(options, resolve, reject);
  });
