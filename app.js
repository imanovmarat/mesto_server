const express = require('express');
const { PORT = 3000 } = process.env;
const path = require('path');
const routes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen( PORT, () => {
  console.log(`App listening on port: ${PORT}`);
})