import Org from '../..';

import getJSONdefs from '../../utils/getJSONdefs';

import processOrgToDraft from '../processors/processOrgToDraft';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

const publishName = 'setOrgStatusToDraft';
const setOrgStatusToDraft = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getJSONdefs, checkOptionsArgsId);
    const { args } = options;

    const org = Org.findOne({
      _id: args._id,
    });
    if (!org) throw new Error(`[${publishName}] Org not found`);

    resolve(processOrgToDraft(org, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    setOrgStatusToDraft(options, resolve, reject);
  });
