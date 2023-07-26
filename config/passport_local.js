const passport = require('passport'); // requiriing passport
// this is the strategy I have used for authentication purpose.
const LocalStrategy = require('passport-local').Strategy; // requiring LocalStrategy

const User = require('../model/user');
const alert = require('alert-node');

// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    async function(email, password, done){
        // find a user and establish the identity
        let user = await User.findOne({email : email});

        if(!user){
            alert('User not found. Please sign up first');
            return done(null, false);
        }
        else if (user.password != password)
        {
            alert('Invalid Password. Please try again or reset the password.');
            return done(null, false);
        }
        return done(null, user);
        
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done){
    
    let userId = await User.findById(id);
    if(!userId){
        console.log("Error in config/ passport-local");
        return ;
    } 
    return done(null, userId);
});
// Checking authentication
passport.checkAuthentication = function (req, res, next){
    // if user is signed in , then pass on the request ot the next fucntion (controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/users/sign-in');
}
// Setting authentication
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // currenct user data is stored in the req, so we are just storing its data to res.
        res.locals.user = req.user
    }
    next();
}

module.exports = passport;