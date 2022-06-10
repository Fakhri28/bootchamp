import detailContoh from './detail';

export default {
  detailContoh: async (parent, args, context) =>
    detailContoh({
      context,
      _id: (parent && parent.ContohId) || args._id,
      publishName: 'detailContoh',
    }),
  getContoh: async (parent, args, context) =>
    detailContoh({
      context,
      _id: (parent && parent.ContohId) || args._id,
      publishName: 'getContoh',
    }),
};
