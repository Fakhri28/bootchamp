import EmailSubscriber from '../..';

import getProjection from '../../../../../helpers/getProjection';
import ownerQuery from '../../../../../helpers/ownerQuery';
import parsePropsToQueryOptions from '../../../../../helpers/parsePropsToQueryOptions';
import authorizer from '../../../../../helpers/server/authorizer';

import getEmailSubscriberJSONdefs from '../../utils/getJSONdefs';

const action = (options, party, tenant) => {
  const { _id, publishName } = options;
  if (!_id) return undefined;

  const { fields, query } = getEmailSubscriberJSONdefs(publishName, options);
  const projection = getProjection(parsePropsToQueryOptions({ ...options, fields }));
  const selector = {
    ...query,
    ...ownerQuery(tenant.owner),
  };
  return EmailSubscriber.findOne(selector, projection);
};

const detailEmailSubscriber = (options, resolve, reject) => {
  const { publishName } = options;
  try {
    // toggle this if you want to enforce checking args._id
    // const { party, tenant } = authorizer(options, publishName, getEmailSubscriberJSONdefs, checkOptionsArgsId);
    const { party, tenant } = authorizer(options, publishName, getEmailSubscriberJSONdefs);

    resolve(action(options, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    detailEmailSubscriber(options, resolve, reject);
  });
