import authorizer from '../../../../../helpers/server/authorizer';

import getJSONdefs from '../../utils/getJSONdefs';

import createOrg from '../processors/createOrg';

const publishName = 'addOrg';

const addOrg = (options, resolve, reject) => {
  try {
    const { party, host } = authorizer(options, publishName, getJSONdefs);
    const { args } = options;

    resolve(createOrg(args, host, party));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addOrg(options, resolve, reject);
  });
