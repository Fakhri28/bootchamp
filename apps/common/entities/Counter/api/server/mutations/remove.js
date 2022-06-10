import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getCounterJSONdefs from '../../utils/getJSONdefs';

import deleteCounter from '../processors/delete';

const publishName = 'removeCounter';
const removeCounter = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getCounterJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    resolve(deleteCounter(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeCounter(options, resolve, reject);
  });
