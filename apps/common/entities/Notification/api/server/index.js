import createIndex from '../../../../helpers/server/createIndex';
import Notification from '..';

createIndex(Notification, { name: 1, owner: 1 });
