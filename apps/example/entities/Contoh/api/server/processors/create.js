import Contoh from '../..';

import entityInsert from '../../../../../../common/helpers/server/entityInsert';
import parseArgs from './parseArgs';

const createContoh = (args, party, tenant) => {
  const doc = parseArgs({ ...args, type: args.type || 'Manual', status: 'Draft' }, tenant.settings);

  const _id = entityInsert(Contoh, doc, 'Create new Contoh', party, tenant.owner);

  return { _id, status: 'Draft' };
};

export default createContoh;
