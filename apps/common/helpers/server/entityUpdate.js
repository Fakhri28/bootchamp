import UserLog from '../../entities/UserLog/api';

const entityUpdate = (
  Entity,
  condition,
  doc,
  description,
  party,
  now,
  options,
  push,
  unset,
  inc,
) => {
  const timestamp = now || new Date();

  UserLog.insert({
    userId: party?._id,
    userType: party?.type || 'Member',
    condition: JSON.stringify(condition),
    doc: JSON.stringify(doc),
    push: JSON.stringify(push),
    unset: JSON.stringify(unset),
    inc: JSON.stringify(inc),
    description,
    timestamp,
    type: 'entityUpdate',
  });

  const action = {
    $set: {
      ...doc,
      updatedBy: party?.name,
      updatedAt: timestamp,
    },
    $push: {
      histories: {
        party,
        timestamp,
        doc: JSON.stringify(doc),
        push: JSON.stringify(push),
        unset: JSON.stringify(unset),
        inc: JSON.stringify(inc),
        description,
      },
      ...push,
    },
  };

  if (unset) action.$unset = unset;
  if (inc) action.$inc = inc;

  return Entity.update(condition, action, options);
};

export default entityUpdate;
