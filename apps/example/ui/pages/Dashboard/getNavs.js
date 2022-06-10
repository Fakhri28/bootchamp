import _ from 'lodash';

import admin from './Admin/navigations';
import spv from './Spv/navigations';
import member from './Member/navigations';
import user from './User/navigations';

const navs = {
  admin,
  spv,
  member,
  user,
};

export default function getNavs(roles) {
  return _.sortBy(
    _.flattenDeep(roles.filter((role) => role !== 'root').map((role) => navs[role])),
    ['sequenceNr'],
  );
}
