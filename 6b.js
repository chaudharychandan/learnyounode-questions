const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {
  const fileExtension = `.${extension}`;
  fs.readdir(directory, (err, list) => {
    if (err) return callback(err);
    const requiredList = list.filter((filename) => {
      return path.extname(filename) === fileExtension;
    });
    callback(null, requiredList);
  });
};
