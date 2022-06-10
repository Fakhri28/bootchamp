/* eslint-disable no-param-reassign */

import _ from 'lodash';

import getEntityByName from './getEntityByName';
import getUserAsParty from './getUserAsParty';
import getOrgAsParty from './getOrgAsParty';

const injectFKs = (FKs, doc, docOld) => {
  FKs.forEach((fk) => {
    const parties = ['vendor', 'buyer', 'parentBuyer', 'seller', 'parentSeller', 'courier'];
    const FK = _.upperFirst(fk);
    const FKId = `${FK}Id`;
    if (doc[FKId] && doc[FKId] !== docOld?.[FKId]) {
      if (fk.includes('Party')) doc[fk] = getUserAsParty(doc[FKId]);
      else if (parties.includes(fk))
        doc[fk] = getOrgAsParty(
          doc[FKId],
          {
            name: 1,
            shortname: 1,
            logoUrl: 1,
            address: 1,
          },
          true,
        );
      else doc[fk] = getEntityByName(FK, doc);
    }
  });
};

export default injectFKs;
