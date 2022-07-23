const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user_schema.js');

passport.use('local.login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email,password,done) => {
  const user = await User.findOne({email: email});
  if(user){
    const match = await user.matchPassword(password,user.password);
    if(match) {
      return done(null, user);
    } else{
      console.log('La contraseña es incorrecta.');
    }
  } else{
    console.log('El correo no existe.');
  }
}));

passport.serializeUser((user,done) => {
  done(null, user.id);
});

passport.deserializeUser((id,done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
