import Notification from '../..';

import cleanseDocDiff from '../../../../../helpers/cleanseDocDiff';
import entityUpdate from '../../../../../helpers/server/entityUpdate';
import parseArgs from './parseArgs';

const editNotification = (args, notification, party, tenant) => {
  if (notification.status === 'Processing')
    throw new Error('Notification is in other process. Please wait and repeat');

  if (!(notification.status === 'Draft' || notification.status === 'Queue'))
    throw new Error(`Notification status: ${notification.status} cannot be edited anymore`);

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Notification,
    { _id: notification._id },
    {
      status: 'Processing',
    },
    'Processing editNotification',
    party,
  );

  // FIXME please check sender and receiver here

  const doc = cleanseDocDiff(parseArgs(args, tenant.settings, notification), notification);

  entityUpdate(
    Notification,
    { _id: notification._id },
    { ...doc, status: notification.status },
    `Notification updated, status back to ${notification.status}`,
    party,
  );
  return Notification.findOne(notification._id);
};

export default editNotification;
