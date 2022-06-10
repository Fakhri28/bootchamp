import EmailSubscriber from '../..';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editEmailSubscriber = (args, emailSubscriber, party, tenant) => {
  if (emailSubscriber.status === 'Processing')
    throw new Error('EmailSubscriber is in other process. Please wait and repeat');

  if (!(emailSubscriber.status === 'Draft' || emailSubscriber.status === 'Queue'))
    throw new Error(`EmailSubscriber status: ${emailSubscriber.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    {
      status: 'Processing',
    },
    'Processing editEmailSubscriber',
    party,
  );

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, emailSubscriber), emailSubscriber);

  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    { ...doc, status: emailSubscriber.status },
    `EmailSubscriber updated, status back to ${emailSubscriber.status}`,
    party,
  );
  return EmailSubscriber.findOne(emailSubscriber._id);
};

export default editEmailSubscriber;
