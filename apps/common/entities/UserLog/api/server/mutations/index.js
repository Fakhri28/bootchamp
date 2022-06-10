import addUserLog from './add';

export default {
  addUserLog: async (root, args, context) =>
    addUserLog({
      context,
      args,
    }),
};
