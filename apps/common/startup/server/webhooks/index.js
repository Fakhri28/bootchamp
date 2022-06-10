/* eslint-disable no-param-reassign */
import fs from 'fs';
import path from 'path';

import bodyParser from 'body-parser';
import { Picker } from 'meteor/meteorhacks:picker';

import mime from './mime';
import webhookHandler from './webhookHandler';

Picker.middleware(bodyParser.json());

const callWebhookHandler = (params, request, response) => {
  webhookHandler({ params, request, response })
    .then((result) => {
      response.statusCode = 200;
      response.end(result);
    })
    .catch((error) => {
      console.warn(error);
      response.statusCode = 500;
      response.end(error);
    });
};

Picker.route('/files/:filename', (params, request, response) => {
  const basePath = process.env.FILES_PATH;
  let filename = path.normalize(path.join(basePath, params.filename));
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) {
    filename = path.normalize(path.join(basePath, 'document_graphic.png')); // just return the default image instead of returning not found
    // toggle this if you want to return not found in html
    // response.writeHead(404, { 'Content-Type': 'text/html' });
    // response.end(`404: ${params.filename} not found`);
    // return;
  }

  const data = fs.readFileSync(filename);
  const mimeType = mime.lookup(filename);
  response.writeHead(200, { 'Content-Type': mimeType });
  response.write(data);
  response.end();
});
