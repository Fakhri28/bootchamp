import UserSetting from '../..';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editUserSetting = (args, userSetting, party, tenant) => {
  if (userSetting.status === 'Processing')
    throw new Error('UserSetting is in other process. Please wait and repeat');

  if (!(userSetting.status === 'Draft' || userSetting.status === 'Queue'))
    throw new Error(`UserSetting status: ${userSetting.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    UserSetting,
    { _id: userSetting._id },
    {
      status: 'Processing',
    },
    'Processing editUserSetting',
    party,
  );

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, userSetting), userSetting);

  entityUpdate(
    UserSetting,
    { _id: userSetting._id },
    { ...doc, status: userSetting.status },
    `UserSetting updated, status back to ${userSetting.status}`,
    party,
  );
  return UserSetting.findOne(userSetting._id);
};

export default editUserSetting;
