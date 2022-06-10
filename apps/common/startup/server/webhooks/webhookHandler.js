import parseExceptionMessage from '../../../helpers/parseExceptionMessage';

const providers = {
};

const handler = ({ params, request, response }, promise) => {
  const description = '[ webhookHandler.handler ]';

  try {
    const targetProvider = providers[params.provider];

    if (targetProvider) {
      targetProvider({ request, response, promise });
    } else {
      throw new Error(`[ 404 ] Not found: ${params.provider}`);
    }
  } catch (exception) {
    const message = parseExceptionMessage(exception);
    promise.reject(`${description} ${message}`);
  }
};

export default (options) => new Promise((resolve, reject) => handler(options, { resolve, reject }));
