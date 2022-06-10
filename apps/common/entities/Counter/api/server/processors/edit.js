import Counter from '../..';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editCounter = (args, counter, party, tenant) => {
  if (counter.status === 'Processing')
    throw new Error('Counter is in other process. Please wait and repeat');

  if (!(counter.status === 'Draft' || counter.status === 'Queue'))
    throw new Error(`Counter status: ${counter.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Counter,
    { _id: counter._id },
    {
      status: 'Processing',
    },
    'Processing editCounter',
    party,
  );

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, counter), counter);

  entityUpdate(
    Counter,
    { _id: counter._id },
    { ...doc, status: counter.status },
    `Counter updated, status back to ${counter.status}`,
    party,
  );
  return Counter.findOne(counter._id);
};

export default editCounter;
