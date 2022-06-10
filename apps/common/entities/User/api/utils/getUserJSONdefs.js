const getUserJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { 'profile.fullname': options && options.search },
    { 'profile.shortname': options && options.search },
    { 'profile.phone': options && options.search },
    { 'emails.address': options && options.search },
  ];

  const defs = {
    listUserUnverifiedAll: {
      // no auth here, special case for super admin
      query: {
        _id: { $ne: props && props._id },
        // FIXME do not use $or here cause it will be overwritten in search
        $or: [
          { 'emails.verified': { $ne: true } },
          { 'profile.Image_User_IDCard': { $exists: false } },
        ],
      },
      fields: { profile: 1, emails: 1, status: 1, hosts: 1 },
      queryOr: queryOr(props),
    },
    listUserUnverifiedHost: {
      auth: ['admin'],
      query: {
        _id: { $ne: props && props._id },
        // FIXME do not use $or here cause it will be overwritten in search
        $or: [
          { 'emails.verified': { $ne: true } },
          { 'profile.Image_User_IDCard': { $exists: false } },
        ],
      },
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listUserWaitingApprovalAll: {
      // no auth here, special case for super admin
      query: {
        _id: { $ne: props && props._id },
        'emails.verified': { $eq: true },
        'profile.Image_User_IDCard': { $exists: true },
      },
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listUserWaitingApprovalHost: {
      auth: ['admin'],
      query: {
        _id: { $ne: props && props._id },
        'emails.verified': { $eq: true },
        'profile.Image_User_IDCard': { $exists: true }, // hosts fields are injected in logic
      },
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listUserApprovedAll: {
      // no auth here, special case for super admin
      query: {
        _id: { $ne: props && props._id },
        hosts: { $exists: true }, // FIXME actually should be 'hosts.*.approved': true, but havent found the operater yet in mongodb
      },
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listUserApprovedHost: {
      auth: ['admin'],
      query: {
        _id: { $ne: props && props._id }, // hosts fields are injected in logic
      },
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listUserAllAll: {
      // no auth here, special case for super admin
      query: { _id: { $ne: props && props._id } },
      fields: { profile: 1, emails: 1, status: 1, hosts: 1 },
      queryOr: queryOr(props),
    },
    listUserAllHost: {
      auth: ['admin'],
      query: { _id: { $ne: props && props._id } }, // in pubProcessorUser hosts will be added
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listUserOnlineAll: {
      // no auth here, special case for super admin
      query: { _id: { $ne: props && props._id }, 'status.online': true },
      fields: { profile: 1, emails: 1, status: 1, hosts: 1 },
      queryOr: queryOr(props),
    },
    listUserOnlineHost: {
      auth: ['admin'],
      query: { _id: { $ne: props && props._id }, 'status.online': true }, // in pubProcessorUser hosts will be added
      fields: { profile: 1, emails: 1, status: 1 },
      queryOr: queryOr(props),
    },
    listHostMemberForEntry: {
      auth: ['member', 'spv'],
    },
    getUser: {
      auth: ['member', 'spv'], // query handled in class
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getUserJSONdefs;
