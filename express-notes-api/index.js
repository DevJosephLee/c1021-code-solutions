const express = require('express');
const jsonData = require('./data.json');
const fs = require('fs');
const app = express();
const notes = jsonData.notes;

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const id in notes) {
    dataArray.push(notes[id]);
  }
  res.status(200).json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (notes[id]) {
    res.status(200).json(notes[id]);
  } else if (req.params.id <= 0 || Number.isInteger(id) !== true) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = jsonData.nextId;
    notes[jsonData.nextId] = req.body;
    jsonData.nextId++;
  }
  const data = jsonData;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    } else {
      res.status(201).json(notes[req.body.id]);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (req.params.id <= 0 || Number.isInteger(id) !== true) {
    res.status(400).json({ error: 'id must be a postive integer' });
    return;
  } else if (notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
    return;
  } else {
    delete notes[id];
  }
  const data = jsonData;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (req.params.id <= 0 || Number.isInteger(id) !== true) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else if (notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = id;
    notes[id] = req.body;
  }
  const data = jsonData;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    } else {
      res.status(200).json(notes[req.body.id]);
    }
  });
});

app.listen(3000, () => {

  console.log('Express server listening on port 3000');
});
