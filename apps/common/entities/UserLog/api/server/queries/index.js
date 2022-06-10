import detailUserLog from './detail';

export default {
  detailUserLog: async (parent, args, context) =>
    detailUserLog({
      context,
      _id: (parent && parent.UserLogId) || args._id,
      publishName: 'detailUserLog',
    }),
  getUserLog: async (parent, args, context) =>
    detailUserLog({
      context,
      _id: (parent && parent.UserLogId) || args._id,
      publishName: 'getUserLog',
    }),
};
