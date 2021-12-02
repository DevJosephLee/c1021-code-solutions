const express = require('express');
const jsonData = require('./data.json');
const fs = require('fs');
const app = express();
const notes = jsonData.notes;

// function updateData() {
//   const data = jsonData;
//   const stringifiedData = JSON.stringify(data, null, 2);
//   fs.writeFile('data.json', stringifiedData, err => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//   });
// }

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const id in notes) {
    dataArray.push(notes[id]);
  }
  res.status(200);
  res.json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  for (const numId in notes) {
    if (req.params.id === numId) {
      var temp = true;
    }
  }
  if (temp) {
    res.status(200);
    res.json(notes[req.params.id]);
  } else if (req.params.id <= 0 || Number.isInteger(id) !== true) {
    res.status(400);
    res.json({ error: 'id must be a postive integer' });
  } else {
    res.status(404);
    res.json({ error: 'cannot find note with id ' + id });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else {
    req.body.id = jsonData.nextId;
    notes[jsonData.nextId] = req.body;
    jsonData.nextId++;
  }
  const data = jsonData;
  const stringifiedData = JSON.stringify(data, null, 2);
  fs.writeFile('/horses/data.json', stringifiedData, err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error has occurred.' });
    } else {
      res.status(201);
      res.json(req.body);
    }
  });
});

// res.sendStatus(500);
// res.send({ error: 'An unexpected error has occurred.' });
// if (temp) {
//   res.status(500);
//   res.send({ error: 'An unexpected error has occurred.' });
// }

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  for (const numId in notes) {
    if (req.params.id === numId) {
      var temp = true;
    }
  }
  if (temp) {
    delete notes[id];
    res.sendStatus(204);
  } else if (req.params.id <= 0 || Number.isInteger(id) !== true) {
    res.status(400);
    res.json({ error: 'id must be a postive integer' });
  } else {
    res.status(404);
    res.json({ error: 'cannot find note with id ' + id });
  }
  const data = jsonData;
  const stringifiedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringifiedData, err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error has occurred.' });
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  for (const numId in notes) {
    if (req.params.id === numId) {
      var temp = true;
    }
  }
  if (temp) {
    req.body.id = id;
    notes[id] = req.body;
    res.status(200);
    res.json(req.body);
  } else if (req.params.id <= 0 || Number.isInteger(id) !== true) {
    res.status(400);
    res.json({ error: 'id must be a postive integer' });
  } else if (req.body.content === undefined) {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else {
    res.status(404);
    res.json({ error: 'cannot find note with id ' + id });
  }
  const data = jsonData;
  const stringifiedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringifiedData, err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error has occurred.' });
    }
  });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

// res.send({ error: 'cannot find note with id ' + id });

// for (const numId in notes) {
//   if (numId !== id) {
//     console.log(notes[numId]);
//   }
// }
