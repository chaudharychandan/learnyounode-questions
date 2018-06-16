const len = process.argv.length;
let sum = 0;
for (let i = 2; i < len; i++) {
  sum = sum + (+process.argv[i]);
}
console.log(sum);
