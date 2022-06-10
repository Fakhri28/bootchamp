import fetchEntityBySelector from './fetchEntityBySelector';
import getEntity from './getEntity';

const fetchEntityByName = (entityName, selector, options) =>
  fetchEntityBySelector(getEntity(entityName), selector, options);

export default fetchEntityByName;
