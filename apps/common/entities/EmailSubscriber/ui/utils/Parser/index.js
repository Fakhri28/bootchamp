import parseDocs from '../../../../../helpers/parseDocs';

import mappings from './mappings';

// standard Parser for List of EmailSubscriber
const EmailSubscriberParser = (docs, settings) => {
  const mappingsParser = mappings(settings);
  return parseDocs(docs, mappingsParser);
};

export default EmailSubscriberParser;
