const gitHubStrategy = require('passport-github').Strategy;
const User = require('../models/user')


module.exports = function(passport) {
    passport.use(new gitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    }, async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            userName: profile.displayName,
            githubID: profile.id
        }
        
        try {
            let user = await User.findOne({githubID: profile.id})
            if(user) {
                console.log(`User, ${profile.displayName}, already exists`)
                done(null, user)
            } else {
                user = await User.create(newUser)
                console.log(`New user created: ${newUser}`)
                done(null, user)
            }
        } catch (err) {
            console.error(err)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user)
    })
    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}