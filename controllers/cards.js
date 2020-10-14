const readFile = require('../utils/read-file');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(dataPath)
    .then(data => res.send(data))
}

module.exports = { getCards };