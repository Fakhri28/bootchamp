const getFileJSONdefs = (publishName, props) => {
  const queryOr = (options) => [
    { _id: options && options.search },
    { name: options && options.search },
    { nr: options && options.search },
  ];

  const defs = {
    detailFile: {
      auth: ['member', 'spv'],
      query: { _id: props && props._id },
    },
    getFile: {
      query: { _id: props && props._id },
      fields: {
        owner: 0,
        createdBy: 0,
        createdAt: 0,
        updatedBy: 0,
        histories: 0,
      },
    },
    listFileForEntry: {
      auth: ['member', 'spv'],
    },
    listFileDraft: {
      auth: ['member', 'spv'],
      query: { status: { $in: ['Draft', 'Queue'] } },
      queryOr: queryOr(props),
    },
    listFileCurrent: {
      auth: ['member', 'spv'],
      query: { status: 'Active' },
      queryOr: queryOr(props),
    },
    listFileHistory: {
      auth: ['spv'],
      query: { status: 'Closed' },
      queryOr: queryOr(props),
    },
    listFileProcessing: {
      auth: ['spv'],
      query: { status: 'Processing' },
      queryOr: queryOr(props),
    },
    addFile: {
      auth: ['member', 'spv'],
    },
    updateFile: {
      auth: ['member', 'spv'],
    },
    removeFile: {
      auth: ['member', 'spv'], // only Draft can be removed so member right here is ok
    },
    setFileStatusToDraft: {
      auth: ['spv'],
    },
    setFileStatusToActive: {
      auth: ['spv'],
    },
    setFileStatusToClosed: {
      auth: ['spv'],
    },
    saveFileToFS: {
      auth: ['user', 'member', 'spv'],
    },
    saveFileToS3: {
      auth: ['user', 'member', 'spv'],
    },
  };
  if (defs[publishName]) return defs[publishName];

  throw new Error(`JSON defs for ${publishName} not found`);
};

export default getFileJSONdefs;
