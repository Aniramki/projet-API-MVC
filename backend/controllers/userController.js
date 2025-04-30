const User = require('../models/userModel');

exports.getUsers = (req, res) => {
    User.getAll((err,results) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

exports.createUser = (req, res) => {
    const {name, second_name, city, email} = req.body;
    if (!name || !second_name || !city|| !email) {
        return res.status(400).send('Nom et email sont obligatoires');
    }
    User.create({name, second_name, city, email }, (err, result) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }
        res.status(201).json({id: result.insertId, name, email });
    });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getUserById(id, (err, result) => {

      if (err) {
        res.status(500).send('Erreur serveur');
      } else if (result.length === 0) {
        res.status(404).send('Utilisateur non trouvé');
      } else {
        res.json(result[0]);
    }
});
};
  

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name, second_name, city, email } = req.body;
    if (!name || !second_name || !city || !email) {
      return res.status(400).send('Nom et email sont obligatoires');
    }
    User.updateUser(id, { name, second_name, city, email }, (err, result) => {
      if (err) {
        return res.status(500).send('Erreur serveur');
      }
      res.status(200).json({ id, name, second_name, city, email });
    });
  };

exports.deleteUser = (req, res) => {
    const {id} = req.params;
    User.delete(id, (err, result) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }
        res.sendStatus(204);
    });
};