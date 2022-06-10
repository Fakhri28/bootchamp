import parseDocs from '../../../../../helpers/parseDocs';

import mappings from './mappings';

// standard Parser for List of Notification
const NotificationParser = (docs, settings) => {
  const mappingsParser = mappings(settings);
  return parseDocs(docs, mappingsParser);
};

export default NotificationParser;
