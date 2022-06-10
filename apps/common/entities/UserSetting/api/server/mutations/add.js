import getUserSettingJSONdefs from '../../utils/getJSONdefs';

import authorizer from '../../../../../helpers/server/authorizer';
import createUserSetting from '../processors/create';

const publishName = 'addUserSetting';
const addUserSetting = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getUserSettingJSONdefs);
    const { args } = options;

    resolve(createUserSetting(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    addUserSetting(options, resolve, reject);
  });
