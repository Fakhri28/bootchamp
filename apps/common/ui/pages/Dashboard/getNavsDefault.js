import _ from 'lodash';

import root from './Root/navigations';
import admin from './Admin/navigations';
import spv from './Spv/navigations';
import member from './Member/navigations';
import user from './User/navigations';

const navs = {
  root,
  admin,
  spv,
  member,
  user,
};

export default function getNavsDefault(roles) {
  return _.sortBy(_.flattenDeep(roles.map((role) => navs[role])), ['sequenceNr']);
}
