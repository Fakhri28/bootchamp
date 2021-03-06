import Counter from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processCounterToClosed = (counter, party) => {
  if (counter.status === 'Processing')
    throw new Error('Counter is in other process. Please wait and repeat');

  // if (!(counter.status === 'Active' || counter.status === 'Delivering'))
  if (counter.status !== 'Active')
    throw new Error(`Counter status: ${counter.status} may not be set to Closed`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Counter,
    { _id: counter._id },
    {
      status: 'Processing',
    },
    'Processing processCounterToClosed',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    Counter,
    { _id: counter._id },
    {
      status: 'Closed',
    },
    'Set Counter Status to Closed',
    party,
    timestamp,
  );

  return { _id: counter._id, status: 'Closed' };
};

export default processCounterToClosed;
