import createIndex from '../../../../helpers/server/createIndex';
import File from '..';

createIndex(File, { name: 1, owner: 1 });
