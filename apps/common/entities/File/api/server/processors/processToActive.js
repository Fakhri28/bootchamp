import File from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processFileToActive = (file, party) => {
  if (file.status === 'Processing')
    throw new Error('File is in other process. Please wait and repeat');

  if (!(file.status === 'Draft' || file.status === 'Queue' || file.status === 'Closed'))
    throw new Error(`File status: ${file.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    File,
    { _id: file._id },
    {
      status: 'Processing',
    },
    'Processing processFileToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    File,
    { _id: file._id },
    {
      status: 'Active',
    },
    'Set File Status to Active',
    party,
    timestamp,
  );

  return { _id: file._id, status: 'Active' };
};

export default processFileToActive;
