import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getNotificationJSONdefs from '../../utils/getJSONdefs';

import deleteNotification from '../processors/delete';

const publishName = 'removeNotification';
const removeNotification = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getNotificationJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    resolve(deleteNotification(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeNotification(options, resolve, reject);
  });
