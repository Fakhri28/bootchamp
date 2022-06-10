import UserSetting from '../..';

import detailUserSetting from './detail';
import parseHost from '../../../../../helpers/parseHost';
import isAdmin from '../../../../../helpers/isAdmin';

export default {
  detailUserSetting: async (parent, args, context) =>
    detailUserSetting({
      context,
      _id: (parent && parent.UserSettingId) || args._id,
      publishName: 'detailUserSetting',
    }),
  getUserSetting: async (parent, args, context) =>
    detailUserSetting({
      context,
      _id: (parent && parent.UserSettingId) || args._id,
      publishName: 'getUserSetting',
    }),
  userSettings: async (parent, args, context) => {
    const host = parseHost(context.headers.origin);

    if (!isAdmin(context.user._id, host)) {
      throw new Error('Sorry, you need to be an administrator to do this.');
    }

    return UserSetting.find({ host }, { sort: { key: 1 } }).fetch();
  },
  userSettingsAll: async (parent, args, context) => {
    if (!isAdmin(context.user._id)) {
      throw new Error('Sorry, you need to be an Root administrator to do this.');
    }

    return UserSetting.find({}, { sort: { key: 1 } }).fetch();
  },
};
