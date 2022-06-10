import detailUser from './detailUser';
import getUser from './getUser';
import exportUserData from './exportUserData';

import listUserByOrg from './listUserByOrg';
import listUserSettingsByHost from './listUserSettingsByHost';

export default {
  detailUser: async (parent, args, context) => {
    const userIdFromParentQuery = parent && parent.userId;
    const userIdToQuery = userIdFromParentQuery || args._id || context.user._id;

    return detailUser({
      args,
      context,
      userIdToQuery,
    });
  },

  listUserByOrg: async (parent, args, context) =>
    listUserByOrg({
      context,
      _id: (parent && parent._id) || (parent && parent.OrgId),
    }),

  listUserSettingsByHost: async (parent, args, context) =>
    listUserSettingsByHost({
      context,
      _id: (parent && parent.UserId) || context.user._id,
    }),

  exportUserData: (parent, args, { user }) =>
    exportUserData({
      user,
    }),

  getUser: async (parent, args, context) =>
    getUser({
      context,
      _id: (parent && (parent.PartyId || parent.SalesPartyId)) || args._id,
    }),
};
