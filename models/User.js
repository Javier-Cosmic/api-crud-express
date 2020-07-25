const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    rut:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        trim: true
    },
    nationality:{
        type: String,
        required: true,
        trim: true
    },
    cellphone:{
        type: Number,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', UserSchema);