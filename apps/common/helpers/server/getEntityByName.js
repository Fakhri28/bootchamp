import getEntityBySelector from './getEntityBySelector';
import getEntity from './getEntity';

const getEntityByName = (entityName, doc, selector, options) => {
  const entity = getEntityBySelector(
    getEntity(entityName),
    selector || { _id: doc[`${entityName}Id`] },
    options || {
      fields: { _id: 1, nr: 1, name: 1, type: 1 },
    },
  );
  if (!entity) throw new Error(`${entityName} not found!`);
  return entity;
};

export default getEntityByName;
