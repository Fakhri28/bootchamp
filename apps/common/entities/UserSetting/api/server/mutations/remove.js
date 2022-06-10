import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getUserSettingJSONdefs from '../../utils/getJSONdefs';

import deleteUserSetting from '../processors/delete';

const publishName = 'removeUserSetting';
const removeUserSetting = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getUserSettingJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    resolve(deleteUserSetting(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeUserSetting(options, resolve, reject);
  });
