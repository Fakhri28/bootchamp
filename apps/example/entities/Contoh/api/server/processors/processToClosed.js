import Contoh from '../../index';

import entityUpdate from '../../../../../../common/helpers/server/entityUpdate';

const processContohToClosed = (contoh, party) => {
  if (contoh.status === 'Processing')
    throw new Error('Contoh is in other process. Please wait and repeat');

  // if (!(contoh.status === 'Active' || contoh.status === 'Delivering'))
  if (contoh.status !== 'Active')
    throw new Error(`Contoh status: ${contoh.status} may not be set to Closed`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Processing',
    },
    'Processing processContohToClosed',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Closed',
    },
    'Set Contoh Status to Closed',
    party,
    timestamp,
  );

  return { _id: contoh._id, status: 'Closed' };
};

export default processContohToClosed;
