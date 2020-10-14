const fsPromises = require('fs').promises;

module.exports = (path) => {
  return fsPromises.readFile(path, {encoding: 'utf8'})
    .then( file => {
      return JSON.parse(file);
    });
 };