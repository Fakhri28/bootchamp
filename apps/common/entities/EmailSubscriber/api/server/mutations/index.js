import addEmailSubscriber from './add';
import updateEmailSubscriber from './update';
import removeEmailSubscriber from './remove';

import setEmailSubscriberStatusToDraft from './setStatusToDraft';
import setEmailSubscriberStatusToActive from './setStatusToActive';
import setEmailSubscriberStatusToClosed from './setStatusToClosed';

export default {
  addEmailSubscriber: async (root, args, context) =>
    addEmailSubscriber({
      context,
      args,
    }),
  updateEmailSubscriber: async (root, args, context) =>
    updateEmailSubscriber({
      context,
      args: args.inputEmailSubscriber,
    }),
  removeEmailSubscriber: async (root, args, context) =>
    removeEmailSubscriber({
      context,
      args,
    }),

  setEmailSubscriberStatusToDraft: async (root, args, context) =>
    setEmailSubscriberStatusToDraft({
      context,
      args,
    }),
  setEmailSubscriberStatusToActive: async (root, args, context) =>
    setEmailSubscriberStatusToActive({
      context,
      args,
    }),
  setEmailSubscriberStatusToClosed: async (root, args, context) =>
    setEmailSubscriberStatusToClosed({
      context,
      args,
    }),
};
