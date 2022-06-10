import ownerQuery from '../ownerQuery';
import checkOptionsArgsId from '../checkOptionsArgsId';
import authorizer from './authorizer';

const processEntityStatus = (
  Entity,
  publishName,
  processor,
  JSONDefs,
  options,
  resolve,
  reject,
) => {
  try {
    const { party, tenant } = authorizer(options, publishName, JSONDefs, checkOptionsArgsId);
    const { args } = options;

    const entity = Entity.findOne({
      _id: args._id,
      ...ownerQuery(tenant.owner),
    });
    if (!entity) throw new Error(`[${publishName}] Entity not found`);

    resolve(processor(entity, tenant, party));
  } catch (exception) {
    reject(`[${publishName}] ${exception.message}`);
  }
};

export default processEntityStatus;
