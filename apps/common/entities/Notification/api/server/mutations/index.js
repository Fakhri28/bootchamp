import addNotification from './add';
import updateNotification from './update';
import removeNotification from './remove';

import setNotificationStatusToDraft from './setStatusToDraft';
import setNotificationStatusToActive from './setStatusToActive';
import setNotificationStatusToClosed from './setStatusToClosed';

export default {
  addNotification: async (root, args, context) =>
    addNotification({
      context,
      args,
    }),
  updateNotification: async (root, args, context) =>
    updateNotification({
      context,
      args: args.inputNotification,
    }),
  removeNotification: async (root, args, context) =>
    removeNotification({
      context,
      args,
    }),

  setNotificationStatusToDraft: async (root, args, context) =>
    setNotificationStatusToDraft({
      context,
      args,
    }),
  setNotificationStatusToActive: async (root, args, context) =>
    setNotificationStatusToActive({
      context,
      args,
    }),
  setNotificationStatusToClosed: async (root, args, context) =>
    setNotificationStatusToClosed({
      context,
      args,
    }),
};
