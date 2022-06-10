import createIndex from '../../../../helpers/server/createIndex';
import UserLog from '..';

createIndex(UserLog, { type: 1, owner: 1 });
