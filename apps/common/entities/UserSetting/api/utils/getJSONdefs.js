const getUserSettingJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { nr: options && options.search },
  ];

  const defs = {
    detailUserSetting: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getUserSetting: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        histories: 0,
      },
    },
    listUserSettingForEntry: {
      auth: ['member', 'spv'],
    },
    listUserSettingDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listUserSettingCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listUserSettingHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listUserSettingProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addUserSetting: {
      auth: ['member', 'spv'],
    },
    updateUserSetting: {
      auth: ['member', 'spv'],
    },
    removeUserSetting: {
      auth: ['member', 'spv'], // only Draft can be removed so member right here is ok
    },
    setUserSettingStatusToDraft: {
      auth: ['spv'],
    },
    setUserSettingStatusToActive: {
      auth: ['spv'],
    },
    setUserSettingStatusToClosed: {
      auth: ['spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getUserSettingJSONdefs;
