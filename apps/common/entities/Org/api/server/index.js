import createIndex from '../../../../helpers/server/createIndex';
import Org from '..';

createIndex(Org, { nr: 1, ParentOrgId: 1, owner: 1 });
