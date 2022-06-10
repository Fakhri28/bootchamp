import UserSetting from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createUserSetting = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Manual', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(UserSetting, doc, 'Create new UserSetting', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createUserSetting;
