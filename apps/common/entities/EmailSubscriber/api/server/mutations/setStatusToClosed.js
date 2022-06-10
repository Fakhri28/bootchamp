import EmailSubscriber from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../helpers/ownerQuery';
import authorizer from '../../../../../helpers/server/authorizer';

import getEmailSubscriberJSONdefs from '../../utils/getJSONdefs';

import processEmailSubscriberToClosed from '../processors/processToClosed';

const publishName = 'setEmailSubscriberStatusToClosed';
const setEmailSubscriberStatusToClosed = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getEmailSubscriberJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    const emailSubscriber = EmailSubscriber.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!emailSubscriber) throw new Error(`[${publishName}] EmailSubscriber not found`);

    resolve(processEmailSubscriberToClosed(emailSubscriber, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    setEmailSubscriberStatusToClosed(options, resolve, reject);
  });
