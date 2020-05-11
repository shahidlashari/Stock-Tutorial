
const express = require('express');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'public/index.html'));
  });
}

app.use(routes);

app.listen(PORT);
