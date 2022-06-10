import File from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../helpers/ownerQuery';
import authorizer from '../../../../../helpers/server/authorizer';

import getFileJSONdefs from '../../utils/getJSONdefs';

import processFileToDraft from '../processors/processToDraft';

const publishName = 'setFileStatusToDraft';
const setFileStatusToDraft = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getFileJSONdefs, checkOptionsArgsId);
    const { args } = options;

    const file = File.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!file) throw new Error(`[${publishName}] File not found`);

    resolve(processFileToDraft(file, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    setFileStatusToDraft(options, resolve, reject);
  });
