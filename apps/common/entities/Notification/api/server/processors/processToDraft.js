import Notification from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processNotificationToDraft = (notification, party) => {
  if (notification.status === 'Processing')
    throw new Error('Notification is in other process. Please wait and repeat');

  // if (!(notification.status === 'Active' || notification.status === 'Delivering'))
  if (notification.status !== 'Active')
    throw new Error(`Notification status: ${notification.status} may not be set to Draft`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    Notification,
    { _id: notification._id },
    {
      status: 'Processing',
    },
    'Processing processNotificationToDraft',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    Notification,
    { _id: notification._id },
    {
      status: 'Draft',
    },
    'Set Notification Status to Draft',
    party,
    timestamp,
  );

  return { _id: notification._id, status: 'Draft' };
};

export default processNotificationToDraft;
