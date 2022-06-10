const filterArrayByIdAndReturnField = (records, _id, fieldNameToReturn, defaultValue) => {
  const results = records.filter((record) => record.value === _id);
  return (results[0] && results[0][fieldNameToReturn]) || defaultValue || '';
};

export default filterArrayByIdAndReturnField;
