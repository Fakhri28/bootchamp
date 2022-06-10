import listBy from '../../../../../helpers/server/listBy';

import Entity from '../..';
import getJSONdefs from '../../utils/getJSONdefs';

export default (options) =>
  new Promise((resolve, reject) => {
    listBy('listChildOrg', options, resolve, reject, Entity, getJSONdefs, true);
  });
