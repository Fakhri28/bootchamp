import authorizer from '../../../../../helpers/server/authorizer';
import getOrgAsParty from '../../../../../helpers/server/getOrgAsParty';

import getJSONdefs from '../../utils/getJSONdefs';

const publishName = 'getOrg';
const getOrg = (options, resolve, reject) => {
  try {
    authorizer(options, publishName, getJSONdefs);
    resolve(getOrgAsParty(options._id));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    getOrg(options, resolve, reject);
  });
