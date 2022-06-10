const getUserLogJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { type: options && options.search },
  ];

  const defs = {
    detailUserLog: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getUserLog: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        histories: 0,
      },
    },
    listUserLogCurrent: {
      auth: ['spv'],
      query: {},
      queryOr: queryOr(props),
    },
    addUserLog: {
      auth: ['member', 'spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getUserLogJSONdefs;
