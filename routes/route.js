const express = require('express');
const routes   = require('express').Router(); 
const auth = require('../controller/authControl')

// AuthRoute Handler
routes.post('/register',auth.registerController)
routes.post('/login',auth.loginController)

routes.post('/userregister',auth.userRegContrl)
routes.post('/userlogin',auth.userlogincntrl)


module.exports = routes;

