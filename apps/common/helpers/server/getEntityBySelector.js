import getFieldsByDef from '../getFieldsByDef';

const getEntityBySelector = (Entity, selector, options) =>
  Entity?.findOne(selector, options || { fields: getFieldsByDef() });

export default getEntityBySelector;
