import checkOptionsArgsId from '../../../../../../common/helpers/checkOptionsArgsId';
import authorizer from '../../../../../../common/helpers/server/authorizer';

import getContohJSONdefs from '../../utils/getJSONdefs';

import deleteContoh from '../processors/delete';

const publishName = 'removeContoh';
const removeContoh = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getContohJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    resolve(deleteContoh(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeContoh(options, resolve, reject);
  });
