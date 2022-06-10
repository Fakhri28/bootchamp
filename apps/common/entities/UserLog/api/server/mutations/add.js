import getUserLogJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../helpers/server/authorizer';
import createUserLog from '../processors/create';

const publishName = 'addUserLog';
const addUserLog = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getUserLogJSONdefs);
    const { args } = options;

    resolve(createUserLog(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addUserLog(options, resolve, reject);
  });
