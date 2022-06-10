import UserSetting from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../helpers/ownerQuery';
import authorizer from '../../../../../helpers/server/authorizer';

import getUserSettingJSONdefs from '../../utils/getJSONdefs';

import processUserSettingToClosed from '../processors/processToClosed';

const publishName = 'setUserSettingStatusToClosed';
const setUserSettingStatusToClosed = (options, resolve, reject) => {
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

    resolve(processUserSettingToClosed(userSetting, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    setUserSettingStatusToClosed(options, resolve, reject);
  });
