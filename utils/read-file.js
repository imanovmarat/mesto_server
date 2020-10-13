const fsPromises = require('fs').promises;




module.exports = (path) => {
  return fsPromises(path, {encoding: 'utf8'})
    .then( file => {
      console.log(file);
      return JSON.parse(file);
    });
 };