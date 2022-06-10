import sanitizeString from '../../../../../helpers/server/sanitizeString';

const parseArgs = (args) => {
  const doc = sanitizeString(args);

  return doc;
};

export default parseArgs;
