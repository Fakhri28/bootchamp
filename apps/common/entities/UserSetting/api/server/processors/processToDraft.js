import UserSetting from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processUserSettingToDraft = (userSetting, party) => {
  if (userSetting.status === 'Processing')
    throw new Error('UserSetting is in other process. Please wait and repeat');

  // if (!(userSetting.status === 'Active' || userSetting.status === 'Delivering'))
  if (userSetting.status !== 'Active')
    throw new Error(`UserSetting status: ${userSetting.status} may not be set to Draft`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    UserSetting,
    { _id: userSetting._id },
    {
      status: 'Processing',
    },
    'Processing processUserSettingToDraft',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    UserSetting,
    { _id: userSetting._id },
    {
      status: 'Draft',
    },
    'Set UserSetting Status to Draft',
    party,
    timestamp,
  );

  return { _id: userSetting._id, status: 'Draft' };
};

export default processUserSettingToDraft;
