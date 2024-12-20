const { hashPassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const Auth = require('../models/Auth')

const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await Auth.login(email, password);

        const data = {
            email,
            email_verified: user.email_verified,
            role: user.role
        }

        const token = signToken(data)

        res.status(200).send(token);
    } catch (error) {
        next(error)
    }
}

const handleRegister = async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        const hashedPassword = hashPassword(password)

        const user = await Auth.register(email, hashedPassword, role);

        res.status(201).json({ msg: 'User registered sucessfully', user });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    handleLogin,
    handleRegister
}