const db = require('../db');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },

    create:(user, callback) => {
        db.query('INSERT INTO users (name, second_name, city, email) VALUES (?, ?, ?, ?)', [user.name, user.second_name, user.city, user.email], callback)
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    },

    getUserById : (id, callback) => {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    },

    updateUser: (id, user, callback) => {
        db.query(
          'UPDATE users SET name = ?, second_name = ?, city = ?, email = ? WHERE id = ?',
          [user.name, user.second_name, user.city, user.email, id],
          callback
        );
      }
};

module.exports = User;