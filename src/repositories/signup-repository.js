const User = require('../app/models/user')
const mongoose = require('mongoose')

exports.register = async (mail, pass) => {
    const result = await User.find({ email: mail });
       
        if (result.length > 0) {
            throw ({status:400, code:'Usuário já existe', message:'tente outro email'});
        }

        const newUser = new User();
        newUser.email = mail;
        newUser.password = newUser.generateHash(pass)
        newUser.save((err, res) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
        });

        return {
            user: newUser
        }

}