const User = require('../models/User');


exports.createUser = async (req, res) => {
    const { rut, name, lastname, age, nationality, cellphone } = req.body;
    
    try {
        
        let user = await User.findOne({ rut });
        if(user){
            return res.status(400).json({ status: 'Error', msg: 'El usuario ya está registrado.'})
        }
        
        const users = new User(req.body);
        // users.rut = rut,
        // users.name = name,
        // users.lastname = lastname,
        // users.age = age,
        // users.nationality = nationality,
        // users.cellphone = cellphone
        
        await users.save();
        
        res.json({ status: 'Ok', msg: 'Usuario creado exitosamente.', users})
        
    } catch (error) {
        res.status(500).json({ status: 'Error', msg: error.message})
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find().select({ __v: 0, date: 0}).sort({ date: -1});
        res.json({users})
        
    } catch (error) {
        res.status(500).json({ status: 'Error', msg: error.message})
    }
}

exports.updateUser = async (req, res) => {
    const {rut, name, lastname, age, nationality, cellphone} = req.body;
    const newUser = {}

    if(rut){
        newUser.rut = rut;
        newUser.name = name;
        newUser.lastname = lastname,
        newUser.age = age,
        newUser.nationality = nationality,
        newUser.cellphone = cellphone
    }

    try {
        user = await User.findByIdAndUpdate({_id: req.params.id}, { $set: newUser}, {new: true});

        res.json({ status: 'Usuario actualizado', data: user});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'Error', msg: error.message});
    }
}

exports.deleteUser = async (req, res) => {
    try {

        let user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json({ status: 'Error', msg: 'El usuario no existe.'})
        }

        await User.findByIdAndRemove({ _id: req.params.id });

        res.json({ status: 'Ok', msg: 'Usuario eliminado correctamente.' })
        
    } catch (error) {
        
        res.status(500).json({ status: 'Error', msg: error.message});
    }
}