const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());



 //Utiliser les routes
 app.use('/api/users', userRoutes);

 
 //Lancer le serveur
 app.listen(port, () => {
    console.log(`Serveur backend démarré sur http://localhost:${port}`);
 });

