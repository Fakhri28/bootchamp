import createIndex from '../../../../helpers/server/createIndex';
import EmailSubscriber from '..';

createIndex(EmailSubscriber, { name: 1, owner: 1 });
