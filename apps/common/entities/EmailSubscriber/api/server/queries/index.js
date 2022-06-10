import detailEmailSubscriber from './detail';

export default {
  detailEmailSubscriber: async (parent, args, context) =>
    detailEmailSubscriber({
      context,
      _id: (parent && parent.EmailSubscriberId) || args._id,
      publishName: 'detailEmailSubscriber',
    }),
  getEmailSubscriber: async (parent, args, context) =>
    detailEmailSubscriber({
      context,
      _id: (parent && parent.EmailSubscriberId) || args._id,
      publishName: 'getEmailSubscriber',
    }),
};
