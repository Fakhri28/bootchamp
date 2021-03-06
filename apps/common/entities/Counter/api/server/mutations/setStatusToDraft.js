import Counter from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../helpers/ownerQuery';
import authorizer from '../../../../../helpers/server/authorizer';

import getCounterJSONdefs from '../../utils/getJSONdefs';

import processCounterToDraft from '../processors/processToDraft';

const publishName = 'setCounterStatusToDraft';
const setCounterStatusToDraft = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getCounterJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    const counter = Counter.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!counter) throw new Error(`[${publishName}] Counter not found`);

    resolve(processCounterToDraft(counter, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    setCounterStatusToDraft(options, resolve, reject);
  });
