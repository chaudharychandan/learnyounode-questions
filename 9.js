const http = require('http');
const bl = require('bl');

let count = 0;
let result = [];

const setResponse = (url, result, index) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) return console.error(err);
      result[index] = data.toString();
      onEnd();
    }));
  });
};

const onEnd = () => {
  count = count + 1;
  if (count === 3) {
    console.log(result.join('\n'));
  }
}

for (let i = 0; i < 3; i++) {
  const url = process.argv[i+2];
  setResponse(url, result, i);
}
