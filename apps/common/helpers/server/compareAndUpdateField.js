// this is useful to update FK field
const compareAndUpdateField = (docNew, docOld, fieldList, func, party, now) => {
  let diff = false;
  const newObject = {
    _id: docOld._id,
  };
  fieldList.forEach((field) => {
    if (docNew[field]) diff = true;
    newObject[field] = docNew[field] || docOld[field];
  });
  if (diff) func(newObject, party, now);
};

export default compareAndUpdateField;
