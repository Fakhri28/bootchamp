import EmailSubscriber from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processEmailSubscriberToClosed = (emailSubscriber, party) => {
  if (emailSubscriber.status === 'Processing')
    throw new Error('EmailSubscriber is in other process. Please wait and repeat');

  // if (!(emailSubscriber.status === 'Active' || emailSubscriber.status === 'Delivering'))
  if (emailSubscriber.status !== 'Active')
    throw new Error(`EmailSubscriber status: ${emailSubscriber.status} may not be set to Closed`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    {
      status: 'Processing',
    },
    'Processing processEmailSubscriberToClosed',
    party,
    timestamp,
  );

  timestamp = new Date();

  // add additional steps here if necessary

  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    {
      status: 'Closed',
    },
    'Set EmailSubscriber Status to Closed',
    party,
    timestamp,
  );

  return { _id: emailSubscriber._id, status: 'Closed' };
};

export default processEmailSubscriberToClosed;
