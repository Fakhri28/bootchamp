import Notification from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createNotification = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Info', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(Notification, doc, 'Create new Notification', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createNotification;
