const express = require('express');
const cors = require('cors');
const connection = require('./config/db');

const app = express();
connection();

app.use(cors());
app.use(express.json({ extended: true }))

const port = process.env.PORT || 4000;

app.use('/api/user', require('./routes/user-route'));
app.get('/', (req, res) => {
    res.send('Api de usuarios')
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});