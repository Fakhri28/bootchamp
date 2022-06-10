import getContohJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../../common/helpers/server/authorizer';
import createContoh from '../processors/create';

const publishName = 'addContoh';
const addContoh = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getContohJSONdefs);
    const { args } = options;

    resolve(createContoh(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addContoh(options, resolve, reject);
  });
