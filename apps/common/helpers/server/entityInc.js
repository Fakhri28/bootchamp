import UserLog from '../../entities/UserLog/api';

const entityInc = (Entity, condition, doc, description, party, now, options, push) => {
  const timestamp = now || new Date();

  UserLog.insert({
    userId: party?._id,
    userType: party?.type || 'Member',
    condition: JSON.stringify(condition),
    doc: JSON.stringify(doc),
    description,
    timestamp,
    type: 'entityInc',
  });

  return Entity.update(
    condition,
    {
      $set: {
        updatedBy: party?.name,
        updatedAt: timestamp,
      },
      $inc: doc,
      $push: {
        histories: {
          party,
          timestamp,
          doc: JSON.stringify(doc),
          description,
        },
        ...push,
      },
    },
    options,
  );
};

export default entityInc;
