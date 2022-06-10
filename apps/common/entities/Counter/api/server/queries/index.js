import detailCounter from './detail';

export default {
  detailCounter: async (parent, args, context) =>
    detailCounter({
      context,
      _id: (parent && parent.CounterId) || args._id,
      publishName: 'detailCounter',
    }),
  getCounter: (parent, args, context) =>
    detailCounter({
      context,
      _id: (parent && parent.CounterId) || args._id,
      publishName: 'getCounter',
    }),
};
