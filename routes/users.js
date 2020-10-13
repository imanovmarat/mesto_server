const router = require('express').Router();
const readFile = require('../utils/read-file');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'users.json');

readFile(dataPath);

router.get('/users', ((req, res) => {
  res.send('проверка users');
}))

module.exports = router;