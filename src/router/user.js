const express = require('express');
const router = express.Router();
const User = require('../models/user_schema.js');
const passport = require('passport');

router.get('/login', function(req,res){
  res.render('user/login.hbs');
});

router.get('/register', function(req,res){
  res.render('user/register.hbs');
});

router.post('/login', function(req,res,next){
  passport.authenticate('local.login', {
    successRedirect: '/note',
    failureRedirect: '/login',
    failureFlash: true
  })(req,res,next)
});


//
router.post('/register', async function(req, res){
  console.log(req.body);
  const {username,email,password,confirm_password} = req.body;
  const user = await User.findOne({username});
  const ema = await User.findOne({email});
  if (user){
    console.log('El usuario existe');
    res.redirect('/register');
  }
  else if (ema){
    console.log('El email existe');
    res.redirect('/register');
  }
  if(password == confirm_password){
    const NewUser = new User({username, email, password});
    NewUser.password = await NewUser.encryptPassword(NewUser.password);
    await NewUser.save();
    console.log('Usuario Registrado')
    res.render('user/login.hbs');
  } else{
    console.log('las contraseñas no coinciden');
    res.redirect('/register');
  }
});

module.exports = router;
