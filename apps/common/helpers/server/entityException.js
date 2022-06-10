import entityUpdate from './entityUpdate';

import parseExceptionMessage from '../parseExceptionMessage';

const entityException = (Entity, entity, party, description, exception, status) => {
  const message = parseExceptionMessage(exception);
  entityUpdate(
    Entity,
    { _id: entity._id },
    {
      status: status || 'Error',
    },
    `EXCEPTION: ${message}, ${description}`,
    party,
  );
  throw new Error(message);
};

export default entityException;
