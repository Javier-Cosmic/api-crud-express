const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connection = async () => {
    try {

        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }),
        console.log('Conexion con mongo db exitosa.')
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;

