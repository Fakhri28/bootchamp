import Contoh from '../..';

import checkOptionsArgsId from '../../../../../../common/helpers/checkOptionsArgsId';
import ownerQuery from '../../../../../../common/helpers/ownerQuery';
import authorizer from '../../../../../../common/helpers/server/authorizer';

import getContohJSONdefs from '../../utils/getJSONdefs';

import editContoh from '../processors/edit';

const publishName = 'updateContoh';
const updateContoh = (options, resolve, reject) => {
  try {
    const { party, tenant } = authorizer(
      options,
      publishName,
      getContohJSONdefs,
      checkOptionsArgsId,
    );
    const { args } = options;

    const contoh = Contoh.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!contoh) throw new Error(`[${publishName}] Contoh not found`);

    resolve(editContoh(args, contoh, party, tenant));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default (options) =>
  new Promise((resolve, reject) => {
    updateContoh(options, resolve, reject);
  });
