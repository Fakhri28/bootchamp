import getNotificationJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../helpers/server/authorizer';
import createNotification from '../processors/create';

const publishName = 'addNotification';
const addNotification = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getNotificationJSONdefs);
    const { args } = options;

    resolve(createNotification(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addNotification(options, resolve, reject);
  });
