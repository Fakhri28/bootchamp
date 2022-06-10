import authorizer from '../../../../../helpers/server/authorizer';
import getUserAsParty from '../../../../../helpers/server/getUserAsParty';

import getUserJSONdefs from '../../utils/getUserJSONdefs';

const publishName = 'getUser';
const getUser = (options, resolve, reject) => {
  try {
    authorizer(options, publishName, getUserJSONdefs);
    resolve(getUserAsParty(options._id));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    getUser(options, resolve, reject);
  });
