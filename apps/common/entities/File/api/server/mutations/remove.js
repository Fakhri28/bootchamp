import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import authorizer from '../../../../../helpers/server/authorizer';

import getFileJSONdefs from '../../utils/getJSONdefs';

import deleteFile from '../processors/delete';

const publishName = 'removeFile';
const removeFile = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getFileJSONdefs, checkOptionsArgsId);
    const { args } = options;

    resolve(deleteFile(args, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    removeFile(options, resolve, reject);
  });
