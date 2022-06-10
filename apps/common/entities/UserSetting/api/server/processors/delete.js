import UserSetting from '../..';

import ownerQuery from '../../../../../helpers/ownerQuery';
import entityRemove from '../../../../../helpers/server/entityRemove';

const deleteUserSetting = (args, party, tenant) => {
  const query = {
    _id: args._id,
    status: 'Draft',
    ...ownerQuery(tenant.owner),
  };

  entityRemove(UserSetting, query, 'Delete UserSetting permanently', party);
  return { _id: args._id };
};

export default deleteUserSetting;
