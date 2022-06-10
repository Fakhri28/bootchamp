import parseHost from '../parseHost';
import getTenant from '../getTenant';
import checkOptions from '../checkOptions';
import checkAuth from '../checkAuth';
import parseMemberFromContext from '../parseMemberFromContext';
import getUserOrgIds from '../getUserOrgIds';

const authorizer = (options, publishName, entityJSONDefs, additionalCheckFunction) => {
  checkOptions(options, additionalCheckFunction);

  const { context } = options;
  const host = parseHost(context.headers.origin);

  const roles = entityJSONDefs(publishName).auth;
  if (roles) checkAuth(context.user, roles, host);

  const userOrgIds =
    entityJSONDefs(publishName).authOrg &&
    getUserOrgIds(context.user._id, entityJSONDefs(publishName).authOrg, host);
  // FIXME check authOrg

  const party = parseMemberFromContext(context);
  const tenant = getTenant(host);

  return { party, tenant, host, userOrgIds };
};

export default authorizer;
