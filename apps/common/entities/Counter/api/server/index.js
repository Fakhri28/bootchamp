import createIndex from '../../../../helpers/server/createIndex';
import Counter from '..';

createIndex(Counter, { name: 1, type: 1, status: 1, owner: 1 });
