import EmailSubscriber from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createEmailSubscriber = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Info', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(EmailSubscriber, doc, 'Create new EmailSubscriber', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createEmailSubscriber;
