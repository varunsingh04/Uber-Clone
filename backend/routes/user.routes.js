const express = require('express');
const router = express.Router();

const {body} = require('express-validator');

const userController = require('../controllers/user.controller.js')

router.post('/register',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long '),

],

userController.registerUser

)




module.exports = router;