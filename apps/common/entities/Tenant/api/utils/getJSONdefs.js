const getTenantJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { nr: options && options.search },
  ];

  const defs = {
    detailTenant: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getTenant: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        histories: 0,
      },
    },
    listTenantForEntry: {
      auth: ['member', 'spv'],
    },
    listTenantDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listTenantCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listTenantHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listTenantProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addTenant: {
      auth: ['member', 'spv'],
    },
    updateTenant: {
      auth: ['member', 'spv'],
    },
    removeTenant: {
      auth: ['member', 'spv'], // only Draft can be removed so member right here is ok
    },
    setTenantStatusToDraft: {
      auth: ['spv'],
    },
    setTenantStatusToActive: {
      auth: ['spv'],
    },
    setTenantStatusToClosed: {
      auth: ['spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getTenantJSONdefs;
