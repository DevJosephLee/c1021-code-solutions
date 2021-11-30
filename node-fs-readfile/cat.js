const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}
