const googleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')


module.exports = (passport) => {
    
    passport.use(new googleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value
        }

        try {
            let user = await User.findOne({googleId: profile.id})
            if(user) {
                console.log(`User, ${profile.displayName}, already exists`)
                done(null, user)
            } else {
                user = await User.create(newUser)
                console.log(`New user created: ${newUser.dispalyName}`)
                done(null, user)
            }
        } catch (err) {
            console.error(err)
        }
    }))

    passport.serializeUser(function(user, done) {
        done(null, user);
       });
       
       
    passport.deserializeUser(function(user, done) {
        done(null, user);
       });
}