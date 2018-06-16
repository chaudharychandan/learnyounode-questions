const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, (err, list) => {
  if (err) throw err;
  const requiredList = list.filter((filename) => {
    return path.extname(filename) === extension;
  });
  console.log(requiredList.join('\n'));
});
