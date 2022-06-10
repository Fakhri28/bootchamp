import parseDotToUnderscore from './parseDotToUnderscore';

const getQueryHostExist = (host) => {
  const fieldHost = `hosts.${parseDotToUnderscore(host)}`;
  const queryOrgHost = { status: 'Active' };
  queryOrgHost[fieldHost] = { $exists: true };
  return queryOrgHost;
};

export default getQueryHostExist;
