import _ from 'lodash';

import Org from '../../entities/Org/api';

const getOrgAsParty = (_id, fieldsToReturn, throwError) => {
  if (!_id) {
    if (throwError) throw new Error('Org not found!');
    return undefined;
  }
  const fields =
    !fieldsToReturn || _.isEmpty(fieldsToReturn)
      ? { name: 1, shortname: 1, logoUrl: 1 }
      : fieldsToReturn;

  const org = Org.findOne({ _id }, { fields });
  if (!org) {
    if (throwError) throw new Error('Org not found!');
    return undefined;
  }

  const result = {
    type: 'Org',
  };
  Object.keys(fields).forEach((key) => (result[key] = org[key]));
  return { _id, ...result };
};

export default getOrgAsParty;
