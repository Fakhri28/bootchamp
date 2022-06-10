import detailFile from './detail';
import listFileByTypeId from './listFileByTypeId';
import listFileByRef from './listFileByRef';

export default {
  detailFile: async (parent, args, context) =>
    detailFile({
      context,
      _id: (parent && parent.FileId) || args._id,
      publishName: 'detailFile',
    }),
  getFile: async (parent, args, context) =>
    detailFile({
      context,
      _id: (parent && parent.FileId) || args._id,
      publishName: 'getFile',
    }),
  listFileByTypeId: async (parent, args, context) =>
    listFileByTypeId({
      context,
      _id: parent && (parent._id || args._id),
      type: args && args.type,
    }),
  listFileByRef: async (parent, args, context) =>
    listFileByRef({
      context,
      _id: parent && (parent._id || args._id),
      type: args && args.type,
    }),
};
