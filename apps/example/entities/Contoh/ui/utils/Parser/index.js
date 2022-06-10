import parseDocs from '../../../../../../common/helpers/parseDocs';

import mappings from './mappings';

// standard Parser for List of Contoh
const ContohParser = (docs, settings) => {
  const mappingsParser = mappings(settings);
  return parseDocs(docs, mappingsParser);
};

export default ContohParser;
