const fieldsDef = {
  etc: {
    owner: 0,
    createdBy: 0,
    createdAt: 0,
    updatedBy: 0,
    histories: 0,
  },
};
const getFieldsByDef = (def) => {
  return fieldsDef[def] || fieldsDef.etc;
};

export default getFieldsByDef;
