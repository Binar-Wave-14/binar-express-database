const router = require('express').Router()

const controller = require('../controllers/auth.controller')

router.get('/register', controller.viewRegister)
router.post('/create-register', controller.createRegister)


module.exports = router