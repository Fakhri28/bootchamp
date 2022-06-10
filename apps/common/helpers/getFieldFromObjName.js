import _ from 'lodash';

const getFieldFromObjName = (doc, objName, fieldName) => {
  const obj = doc[_.upperFirst(objName)] || doc[objName];
  return (obj && obj[fieldName]) || '';
};

export default getFieldFromObjName;
