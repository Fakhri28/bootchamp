import UserSetting from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../helpers/ownerQuery';
import authorizer from '../../../../../helpers/server/authorizer';

import getUserSettingJSONdefs from '../../utils/getJSONdefs';

import editUserSetting from '../processors/edit';

const publishName = 'updateUserSetting';
const updateUserSetting = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getUserSettingJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    const userSetting = UserSetting.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!userSetting) throw new Error(`[${publishName}] UserSetting not found`);

    resolve(editUserSetting(args, userSetting, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    updateUserSetting(options, resolve, reject);
  });
