import addCounter from './add';
import updateCounter from './update';
import removeCounter from './remove';

import setCounterStatusToDraft from './setStatusToDraft';
import setCounterStatusToActive from './setStatusToActive';
import setCounterStatusToClosed from './setStatusToClosed';

export default {
  addCounter: async (root, args, context) =>
    addCounter({
      context,
      args,
    }),
  updateCounter: async (root, args, context) =>
    updateCounter({
      context,
      args: args.inputCounter,
    }),
  removeCounter: async (root, args, context) =>
    removeCounter({
      context,
      args,
    }),

  setCounterStatusToDraft: async (root, args, context) =>
    setCounterStatusToDraft({
      context,
      args,
    }),
  setCounterStatusToActive: async (root, args, context) =>
    setCounterStatusToActive({
      context,
      args,
    }),
  setCounterStatusToClosed: async (root, args, context) =>
    setCounterStatusToClosed({
      context,
      args,
    }),
};
