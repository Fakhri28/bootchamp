import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getEmailSubscriberJSONdefs from '../../utils/getJSONdefs';

import deleteEmailSubscriber from '../processors/delete';

const publishName = 'removeEmailSubscriber';
const removeEmailSubscriber = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getEmailSubscriberJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    resolve(deleteEmailSubscriber(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeEmailSubscriber(options, resolve, reject);
  });
