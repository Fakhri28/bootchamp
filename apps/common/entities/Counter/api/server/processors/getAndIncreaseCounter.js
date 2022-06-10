import { Meteor } from 'meteor/meteor';

import Counter from '../..';

import ownerQuery from '../../../../../helpers/ownerQuery';
import entityInsert from '../../../../../helpers/server/entityInsert';

const parentStatus = {
  Daily: 'Monthly',
  Monthly: 'Yearly',
};

const getAndIncreaseCounter = (name, type, status, party, owner, incValue) => {
  const query = {
    name,
    type,
    status,
    ...ownerQuery(owner),
  };

  // this is to trick _id to be string because findAndModify create ObjectId
  const counterExists = Counter.findOne(query, { fields: { _id: 1 } });
  if (!counterExists) {
    entityInsert(
      Counter,
      { name, counter: 0, type, status },
      `Create new Counter with name: ${name}, type: ${type}, status: ${status}`,
      party,
      owner,
    );
  }

  const rawCounter = Counter.rawCollection();
  const wrappedFunc = Meteor.wrapAsync(rawCounter.findOneAndUpdate, rawCounter); // FIXME test in real atlas db. could be findAndModify

  const result = wrappedFunc(
    query,
    { $inc: { counter: incValue || 1 } },
    { returnDocument: 'after', upsert: true },
  );

  // now recursive part for status, please see parentStatus above
  if (parentStatus[status])
    getAndIncreaseCounter(
      name.substring(0, name.length - 2),
      type,
      parentStatus[status],
      party,
      owner,
      incValue,
    );

  return result.value;
};

export default getAndIncreaseCounter;
