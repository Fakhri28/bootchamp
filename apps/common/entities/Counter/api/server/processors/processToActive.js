import Counter from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processCounterToActive = (counter, party) => {
  if (counter.status === 'Processing')
    throw new Error('Counter is in other process. Please wait and repeat');

  if (!(counter.status === 'Draft' || counter.status === 'Queue' || counter.status === 'Closed'))
    throw new Error(`Counter status: ${counter.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Counter,
    { _id: counter._id },
    {
      status: 'Processing',
    },
    'Processing processCounterToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    Counter,
    { _id: counter._id },
    {
      status: 'Active',
    },
    'Set Counter Status to Active',
    party,
    timestamp,
  );

  return { _id: counter._id, status: 'Active' };
};

export default processCounterToActive;
