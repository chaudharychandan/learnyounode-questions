const fs = require('fs');
const content = fs.readFile(process.argv[2], { encoding: 'utf8' }, (err, content) => {
  if (err) throw err;
  const lines = content.split('\n').length - 1;
  console.log(lines);
});
