import createIndex from '../../../../helpers/server/createIndex';
import Tenant from '..';

createIndex(Tenant, { name: 1, owner: 1 });
