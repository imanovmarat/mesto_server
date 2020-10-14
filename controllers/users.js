const readFile = require('../utils/read-file');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(dataPath)
    .then(data => res.send(data));
};

const getUser = (req, res) => {
  const { id } = req.params;
  readFile(dataPath)
    .then(data => {
      const userToFind = data.find(user => user._id === id);
      return userToFind;
    })
    .then(user => {
      if (!user) {
        return res.status(404).send( { "message": "Нет пользователя с таким id" });
      }
      res.send(user);
    });
};

module.exports = {
  getUsers,
  getUser,
};