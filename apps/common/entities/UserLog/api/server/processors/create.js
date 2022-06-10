import UserLog from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createUserLog = (args, party, tenant) => {
  const doc = parseArgs({ ...args, status: 'Draft' }, tenant.settings);

  const _id = entityInsert(UserLog, doc, 'Create new UserLog', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createUserLog;
