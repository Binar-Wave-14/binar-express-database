const viewRegister = async (req, res, next) => {
    return res.render('register')
}

const createRegister = async (req, res, next) => {
    const { fullname, email, password, address } = req.body
}

module.exports = {
    viewRegister,
    createRegister
}