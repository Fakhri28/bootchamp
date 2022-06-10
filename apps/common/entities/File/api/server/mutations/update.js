import File from '../..';

import checkOptionsArgsId from '../../../../../helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../helpers/ownerQuery';
import authorizer from '../../../../../helpers/server/authorizer';

import getFileJSONdefs from '../../utils/getJSONdefs';

import editFile from '../processors/edit';

const publishName = 'updateFile';
const updateFile = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(options, publishName, getFileJSONdefs, checkOptionsArgsId);
    const { args } = options;

    const file = File.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!file) throw new Error(`[${publishName}] File not found`);

    resolve(editFile(args, file, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    updateFile(options, resolve, reject);
  });
