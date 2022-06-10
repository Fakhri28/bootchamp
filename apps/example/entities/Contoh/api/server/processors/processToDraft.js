import Contoh from '../../index';

import entityUpdate from '../../../../../../common/helpers/server/entityUpdate';

const processContohToDraft = (contoh, party) => {
  if (contoh.status === 'Processing')
    throw new Error('Contoh is in other process. Please wait and repeat');

  // if (!(contoh.status === 'Active' || contoh.status === 'Delivering'))
  if (contoh.status !== 'Active')
    throw new Error(`Contoh status: ${contoh.status} may not be set to Draft`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Processing',
    },
    'Processing processContohToDraft',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    Contoh,
    { _id: contoh._id },
    {
      status: 'Draft',
    },
    'Set Contoh Status to Draft',
    party,
    timestamp,
  );

  return { _id: contoh._id, status: 'Draft' };
};

export default processContohToDraft;
