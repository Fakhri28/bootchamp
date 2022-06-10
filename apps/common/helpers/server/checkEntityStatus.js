const checkEntityStatus = (Entity, _id, status, description) => {
  const entity = Entity.findOne({ _id }, { fields: { status: 1 } });
  if (!entity) throw new Error(`${description} not found`);
  if (entity.status !== status) throw new Error(`${description} is not ${status} anymore!`);
};

export default checkEntityStatus;
