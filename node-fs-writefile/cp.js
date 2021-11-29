const fs = require('fs');

fs.writeFile(process.argv[3], fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  return data;
}),
err => {
  if (err) {
    throw err;
  }
});
