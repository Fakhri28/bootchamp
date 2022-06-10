import listFile from '../processors/list';

export default (options) =>
  new Promise((resolve, reject) => {
    listFile('listFileByRef', options, resolve, reject);
  });
