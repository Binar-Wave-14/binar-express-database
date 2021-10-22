const bcrypt = require('bcrypt')

const User = require('../models/users.model')

const viewRegister = async (req, res, next) => {
    return res.render('register')
}

const createRegister = async (req, res, next) => {
    try {
        const { fullname, email, password, full_address } = req.body

        if (!email) {
            throw {
                message: 'email must be valid email',
                code: 400,
                error: 'bad request'
            }
        }
    
        if (!password || password.length < 8) {
            throw {
                message: 'password must be min 8 char',
                code: 400,
                error: 'bad request'
            }
        }
    
        const isExist = await User.findOne({
            where: {
                email
            }
        })
    
        if (isExist) {
            throw {
                message: 'user already exist',
                code: 400,
                error: 'conflict'
            }
        }
    
        const hashedPassword = bcrypt.hashSync(password, 12)
    
        await User.create({
            fullname,
            email,
            password: hashedPassword,
            full_address
        })

        const users = await User.findAll()
    
        return res.render('list-user', {
            users
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    viewRegister,
    createRegister
}