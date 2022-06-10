import File from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processFileToClosed = (file, party) => {
  if (file.status === 'Processing')
    throw new Error('File is in other process. Please wait and repeat');

  // if (!(file.status === 'Active' || file.status === 'Delivering'))
  if (file.status !== 'Active')
    throw new Error(`File status: ${file.status} may not be set to Closed`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    File,
    { _id: file._id },
    {
      status: 'Processing',
    },
    'Processing processFileToClosed',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    File,
    { _id: file._id },
    {
      status: 'Closed',
    },
    'Set File Status to Closed',
    party,
    timestamp,
  );

  return { _id: file._id, status: 'Closed' };
};

export default processFileToClosed;
