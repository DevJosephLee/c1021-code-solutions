const express = require('express');
const path = require('path');
const app = express();

const modPath = path.join(__dirname, 'public');
const staticModPath = express.static(modPath);
app.use(staticModPath);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
})
