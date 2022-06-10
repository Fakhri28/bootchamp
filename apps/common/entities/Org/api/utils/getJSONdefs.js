import getFieldsByDef from '../../../../helpers/getFieldsByDef';

const getJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { shortname: options && options.search },
    { nr: options && options.search },
    { 'address.phone': options && options.search },
    { type: options && options.search },
  ];

  const defs = {
    listOrgDraftAll: {
      // no auth here, special case for super admin
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listOrgDraftHost: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      fields: {
        nr: 1,
        name: 1,
        shortname: 1,
        address: 1,
        featureNr: 1,
        sequenceNr: 1,
        type: 1,
        status: 1,
        description: 1,
        updatedAt: 1,
      },
      queryOr: queryOr(props),
    },
    listOrgCurrentAll: {
      // no auth here, special case for super admin
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listOrgCurrentHost: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      fields: {
        nr: 1,
        name: 1,
        shortname: 1,
        bcaCustomerNumber: 1,
        address: 1,
        featureNr: 1,
        sequenceNr: 1,
        type: 1,
        status: 1,
        description: 1,
        updatedAt: 1,
      },
      queryOr: queryOr(props),
    },
    listOrgCurrentFeatureAll: {
      // no auth here, special case for super admin
      query: { featureNr: { $gt: 0 }, status: 'Active' },
      queryOr: queryOr(props),
    },
    listOrgCurrentFeatureHost: {
      auth: ['member', 'spv'],
      query: { featureNr: { $gt: 0 }, status: 'Active' },
      fields: {
        nr: 1,
        name: 1,
        shortname: 1,
        address: 1,
        featureNr: 1,
        sequenceNr: 1,
        type: 1,
        status: 1,
        description: 1,
        updatedAt: 1,
      },
      queryOr: queryOr(props),
    },
    listOrgHistoryAll: {
      // no auth here, special case for super admin
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listOrgProcessingAll: {
      // no auth here, special case for super admin
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    listOrgHistoryHost: {
      auth: ['spv'],
      query: { status: 'Closed' },
      fields: {
        nr: 1,
        name: 1,
        shortname: 1,
        address: 1,
        featureNr: 1,
        sequenceNr: 1,
        type: 1,
        status: 1,
        description: 1,
        updatedAt: 1,
      },
      queryOr: queryOr(props),
    },
    listOrgProcessingHost: {
      auth: ['spv'],
      query: { status: 'Processing' },
      fields: {
        nr: 1,
        name: 1,
        shortname: 1,
        address: 1,
        featureNr: 1,
        sequenceNr: 1,
        type: 1,
        status: 1,
        description: 1,
        updatedAt: 1,
      },
      queryOr: queryOr(props),
    },
    detailOrg: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getOrg: {
      auth: ['member', 'spv'], // query handled in class
    },
    addOrg: {
      auth: ['member', 'spv'],
    },
    updateOrg: {
      auth: ['member', 'spv'],
    },
    removeOrg: {
      auth: ['member', 'spv'],
    },
    setOrgStatusToDraft: {
      auth: ['spv'],
    },
    setOrgStatusToActive: {
      auth: ['spv'],
    },
    setOrgStatusToClosed: {
      auth: ['spv'],
    },
    listOrgClientForEntry: {
      auth: ['member', 'spv'],
    },
    listOrgVendorForEntry: {
      auth: ['member', 'spv'],
    },
    listOrgCourierForEntry: {
      auth: ['member', 'spv'],
    },
    listChildOrg: {
      auth: ['member', 'spv'],
      query: { ParentOrgId: props?._id },
      fields: getFieldsByDef(),
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getJSONdefs;
