import listFile from '../processors/list';

export default (options) =>
  new Promise((resolve, reject) => {
    listFile('listFileByTypeId', options, resolve, reject);
  });
