import Contoh from '../..';

import cleanseDocDiff from '../../../../../../common/helpers/cleanseDocDiff';
import entityUpdate from '../../../../../../common/helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editContoh = (args, contoh, party, tenant) => {
  if (contoh.status === 'Processing')
    throw new Error('Contoh is in other process. Please wait and repeat');

  if (!(contoh.status === 'Draft' || contoh.status === 'Queue'))
    throw new Error(`Contoh status: ${contoh.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Processing',
    },
    'Processing editContoh',
    party,
  );

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, contoh), contoh);

  entityUpdate(
    Contoh,
    { _id: contoh._id },
    { ...doc, status: contoh.status },
    `Contoh updated, status back to ${contoh.status}`,
    party,
  );
  return { _id: contoh._id, ...doc };
};

export default editContoh;
