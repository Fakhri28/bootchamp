import EmailSubscriber from '../../index';

import entityUpdate from '../../../../../helpers/server/entityUpdate';

const processEmailSubscriberToActive = (emailSubscriber, party) => {
  if (emailSubscriber.status === 'Processing')
    throw new Error('EmailSubscriber is in other process. Please wait and repeat');

  if (
    !(
      emailSubscriber.status === 'Draft' ||
      emailSubscriber.status === 'Queue' ||
      emailSubscriber.status === 'Closed'
    )
  )
    throw new Error(`EmailSubscriber status: ${emailSubscriber.status} may not be set to Active`);

  let timestamp = new Date();

  // set to processing, this is to prevent race condition, since we havent used mongodb transaction yet
  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    {
      status: 'Processing',
    },
    'Processing processEmailSubscriberToActive',
    party,
    timestamp,
  );

  // add additional steps here if necessary

  timestamp = new Date();

  entityUpdate(
    EmailSubscriber,
    { _id: emailSubscriber._id },
    {
      status: 'Active',
    },
    'Set EmailSubscriber Status to Active',
    party,
    timestamp,
  );

  return { _id: emailSubscriber._id, status: 'Active' };
};

export default processEmailSubscriberToActive;
