import { Accounts } from 'meteor/accounts-base';

import UserLog from '../../apps/common/entities/UserLog/api';

import parseHost from '../../apps/common/helpers/parseHost';

// TODO see whether it works if login from mobile app
Accounts.onLogout((options) => {
  UserLog.insert({
    userId: options && options.user && options.user._id,
    host: parseHost(options.connection.httpHeaders.host),
    timestamp: new Date(),
    clientAddress: options.connection.clientAddress,
    httpHeaders: options.connection.httpHeaders,
    type: 'Logout',
  });
});
