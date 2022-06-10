import File from '../..';

import entityInsert from '../../../../../helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createFile = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Manual', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(File, doc, 'Create new File', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createFile;
