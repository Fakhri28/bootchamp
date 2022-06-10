import { Accounts } from 'meteor/accounts-base';

import _ from 'lodash';

import UserSetting from '../../apps/common/entities/UserSetting/api';

import parseDotToUnderscore from '../../apps/common/helpers/parseDotToUnderscore';
import upperFirstLetterOfWords from '../../apps/common/helpers/upperFirstLetterOfWords';

Accounts.onCreateUser((options, user) => {
  const userToCreate = user;
  if (options.profile) userToCreate.profile = options.profile;

  userToCreate.profile.fullname = upperFirstLetterOfWords(userToCreate.profile.fullname);
  userToCreate.emails[0].address = _.toLower(userToCreate.emails[0].address);

  const settings = UserSetting.find({ host: options.host }).fetch();
  userToCreate.hosts = {};
  userToCreate.hosts[parseDotToUnderscore(options.host)] = {
    approved: false,
    settings,
    visit: {
      first: {
        clientAddress: (options.connection && options.connection.clientAddress) || '',
        httpHeaders: (options.connection && options.connection.httpHeaders) || {},
        timestamp: new Date(),
      },
    },
  };

  return userToCreate;
});
