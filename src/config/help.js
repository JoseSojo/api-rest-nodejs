const helpers = {};

helpers.ON = function(req,res,next){
  if(req.isAuthenticated()){
    next();
  } else{
    res.redirect('/login');
  }
};

helpers.OFF = function(req,res,next){
  if(!req.isAuthenticated()){
    next();
  } else{
    res.redirect('/note');
  }
};

module.exports = helpers;
