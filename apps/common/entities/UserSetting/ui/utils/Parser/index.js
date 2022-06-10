import parseDocs from '../../../../../helpers/parseDocs';

import mappings from './mappings';

// standard Parser for List of UserSetting
const UserSettingParser = (docs, settings) => {
  const mappingsParser = mappings(settings);
  return parseDocs(docs, mappingsParser);
};

export default UserSettingParser;
