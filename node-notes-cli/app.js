const fs = require('fs');
const jsonData = require('./data.json');
const notes = jsonData.notes;

function updateData() {
  const data = jsonData;
  const stringifiedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringifiedData, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

for (const numbers in notes) {
  if (process.argv[2] === 'read') {
    console.log(`${numbers}: ${notes[numbers]}`);
  }
}

if (process.argv[2] === 'create') {
  notes[jsonData.nextId] = process.argv[3];
  jsonData.nextId++;
  updateData();
} else if (process.argv[2] === 'delete') {
  delete notes[process.argv[3]];
  updateData();
} else if (process.argv[2] === 'update') {
  notes[process.argv[3]] = process.argv[4];
  updateData();
}
