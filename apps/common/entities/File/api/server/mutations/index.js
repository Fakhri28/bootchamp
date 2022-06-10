import addFile from './add';
import updateFile from './update';
import removeFile from './remove';

import setFileStatusToDraft from './setStatusToDraft';
import setFileStatusToActive from './setStatusToActive';
import setFileStatusToClosed from './setStatusToClosed';

export default {
  addFile: async (root, args, context) =>
    addFile({
      context,
      args,
    }),
  updateFile: async (root, args, context) =>
    updateFile({
      context,
      args: args.inputFile,
    }),
  removeFile: async (root, args, context) =>
    removeFile({
      context,
      args,
    }),

  setFileStatusToDraft: async (root, args, context) =>
    setFileStatusToDraft({
      context,
      args,
    }),
  setFileStatusToActive: async (root, args, context) =>
    setFileStatusToActive({
      context,
      args,
    }),
  setFileStatusToClosed: async (root, args, context) =>
    setFileStatusToClosed({
      context,
      args,
    }),
};
