import addContoh from './add';
import updateContoh from './update';
import removeContoh from './remove';

import setContohStatusToDraft from './setStatusToDraft';
import setContohStatusToActive from './setStatusToActive';
import setContohStatusToClosed from './setStatusToClosed';

export default {
  addContoh: async (root, args, context) =>
    addContoh({
      context,
      args,
    }),
  updateContoh: async (root, args, context) =>
    updateContoh({
      context,
      args: args.inputContoh,
    }),
  removeContoh: async (root, args, context) =>
    removeContoh({
      context,
      args,
    }),

  setContohStatusToDraft: async (root, args, context) =>
    setContohStatusToDraft({
      context,
      args,
    }),
  setContohStatusToActive: async (root, args, context) =>
    setContohStatusToActive({
      context,
      args,
    }),
  setContohStatusToClosed: async (root, args, context) =>
    setContohStatusToClosed({
      context,
      args,
    }),
};
