import getEmailSubscriberJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../helpers/server/authorizer';
import createEmailSubscriber from '../processors/create';

const publishName = 'addEmailSubscriber';
const addEmailSubscriber = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getEmailSubscriberJSONdefs);
    const { args } = options;

    resolve(createEmailSubscriber(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addEmailSubscriber(options, resolve, reject);
  });
