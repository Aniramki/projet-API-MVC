//Connexion MySQL
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'France.2025',
    database: 'angular_test'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connection à MySQL :', err);
        process.exit(1);
    }else {
        console.log('Connecté à MySQL');
    }
});

module.exports = db;