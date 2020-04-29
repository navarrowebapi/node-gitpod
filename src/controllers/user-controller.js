const userService = require("../services/signup-service")
const signupRepository = require('../repositories/signup-repository')

exports.userRegister = async function (req, res) {
    try {
        await signupRepository.register(req.body.email, req.body.password);
        res.status(201).json({ "message": "usuário registrado com sucesso" });
    }
    catch (e) {
        if (!e.status) {
            res.status(500).json({ error: { code: 'UNKNOWN_ERROR', message: 'An unknown error occurred.' } });
        } else {
            res.status(e.status).json({ error: { code: e.code, message: e.message } });
        }
    }
}