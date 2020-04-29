const User = require("../app/models/user");
const signupRepository = require('../repositories/signup-repository')

//Signup-User-Post-Controller
exports.registerUser = async (mail, pass) => {
    
    try {
        await signupRepository.register({
        email: mail,
        password: pass,
    });    
    } catch (error) {
        next(error);
    }
    

}