import parseDocs from '../../../../../helpers/parseDocs';

import mappings from './mappings';

// standard Parser for List of File
const FileParser = (docs, settings) => {
  const mappingsParser = mappings(settings);
  return parseDocs(docs, mappingsParser);
};

export default FileParser;
