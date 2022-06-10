import getCounterJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../helpers/server/authorizer';
import createCounter from '../processors/create';

const publishName = 'addCounter';
const addCounter = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getCounterJSONdefs);
    const { args } = options;

    resolve(createCounter(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addCounter(options, resolve, reject);
  });
