import Contoh from '../../index';

import entityUpdate from '../../../../../../common/helpers/server/entityUpdate';

const processContohToActive = (contoh, party) => {
  if (contoh.status === 'Processing')
    throw new Error('Contoh is in other process. Please wait and repeat');

  if (!(contoh.status === 'Draft' || contoh.status === 'Queue' || contoh.status === 'Closed'))
    throw new Error(`Contoh status: ${contoh.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Processing',
    },
    'Processing processContohToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Active',
    },
    'Set Contoh Status to Active',
    party,
    timestamp,
  );

  return { _id: contoh._id, status: 'Active' };
};

export default processContohToActive;
