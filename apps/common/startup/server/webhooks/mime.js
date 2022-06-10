import path from 'path';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

const mime = {
  lookup: (filename) => {
    const type = mimeTypes[path.extname(filename)];
    return type || 'text/html';
  },
};

export default mime;
