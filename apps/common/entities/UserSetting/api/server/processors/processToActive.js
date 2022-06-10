import UserSetting from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processUserSettingToActive = (userSetting, party) => {
  if (userSetting.status === 'Processing')
    throw new Error('UserSetting is in other process. Please wait and repeat');

  if (
    !(
      userSetting.status === 'Draft' ||
      userSetting.status === 'Queue' ||
      userSetting.status === 'Closed'
    )
  )
    throw new Error(`UserSetting status: ${userSetting.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    UserSetting,
    { _id: userSetting._id },
    {
      status: 'Processing',
    },
    'Processing processUserSettingToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    UserSetting,
    { _id: userSetting._id },
    {
      status: 'Active',
    },
    'Set UserSetting Status to Active',
    party,
    timestamp,
  );

  return { _id: userSetting._id, status: 'Active' };
};

export default processUserSettingToActive;
