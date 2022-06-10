import sanitizeHtml from 'sanitize-html';

const sanitizeString = (args) => {
  const doc = {};
  Object.keys(args).forEach((key) => {
    doc[key] = typeof args[key] === 'string' ? sanitizeHtml(args[key]) : args[key];
  });
  return doc;
};

export default sanitizeString;
