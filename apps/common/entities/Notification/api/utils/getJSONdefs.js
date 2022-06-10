const getNotificationJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { nr: options && options.search },
  ];

  const defs = {
    detailNotification: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getNotification: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        histories: 0,
      },
    },
    listNotificationForEntry: {
      auth: ['member', 'spv'],
    },
    listNotificationDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listNotificationCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listNotificationHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listNotificationProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addNotification: {
      auth: ['member', 'spv'],
    },
    updateNotification: {
      auth: ['member', 'spv'],
    },
    removeNotification: {
      auth: ['member', 'spv'], // only Draft can be removed so member right here is ok
    },
    setNotificationStatusToDraft: {
      auth: ['spv'],
    },
    setNotificationStatusToActive: {
      auth: ['spv'],
    },
    setNotificationStatusToClosed: {
      auth: ['spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getNotificationJSONdefs;
