import getFieldsByDef from '../getFieldsByDef';

const fetchEntityBySelector = (Entity, selector, options) =>
  Entity.find(selector, options || { fields: getFieldsByDef() }).fetch();

export default fetchEntityBySelector;
