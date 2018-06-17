const listFiles = require('./6b');

const directory = process.argv[2];
const extension = process.argv[3];

listFiles(directory, extension, (err, list) => {
  if (err) console.error(err);
  console.log(list.join('\n'));
});
