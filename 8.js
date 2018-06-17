const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) return console.error(err);
    const str = data.toString();
    console.log(str.length);
    console.log(str);
  }));
});
