const getContohJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { nr: options && options.search },
  ];

  const defs = {
    detailContoh: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getContoh: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        histories: 0,
      },
    },
    listContohForEntry: {
      auth: ['member', 'spv'],
    },
    listContohDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listContohCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listContohHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listContohProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addContoh: {
      auth: ['member', 'spv'],
    },
    updateContoh: {
      auth: ['member', 'spv'],
    },
    removeContoh: {
      auth: ['member', 'spv'], // only Draft can be removed so member right here is ok
    },
    setContohStatusToDraft: {
      auth: ['spv'],
    },
    setContohStatusToActive: {
      auth: ['spv'],
    },
    setContohStatusToClosed: {
      auth: ['spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getContohJSONdefs;
