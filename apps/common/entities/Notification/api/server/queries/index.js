import detailNotification from './detail';

export default {
  detailNotification: async (parent, args, context) =>
    detailNotification({
      context,
      _id: (parent && parent.NotificationId) || args._id,
      publishName: 'detailNotification',
    }),
  getNotification: async (parent, args, context) =>
    detailNotification({
      context,
      _id: (parent && parent.NotificationId) || args._id,
      publishName: 'getNotification',
    }),
};
