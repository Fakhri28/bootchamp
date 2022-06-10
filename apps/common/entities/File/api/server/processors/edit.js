import File from '../..';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editFile = (args, file, party, tenant) => {
  if (file.status === 'Processing')
    throw new Error('File is in other process. Please wait and repeat');

  if (!(file.status === 'Draft' || file.status === 'Queue'))
    throw new Error(`File status: ${file.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    File,
    { _id: file._id },
    {
      status: 'Processing',
    },
    'Processing editFile',
    party,
  );

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, file), file);

  entityUpdate(
    File,
    { _id: file._id },
    { ...doc, status: file.status },
    `File updated, status back to ${file.status}`,
    party,
  );
  return File.findOne(file._id);
};

export default editFile;
