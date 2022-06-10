import Counter from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createCounter = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Manual', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(Counter, doc, 'Create new Counter', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createCounter;
