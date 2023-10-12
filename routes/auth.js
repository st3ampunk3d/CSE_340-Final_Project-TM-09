const router = require('express').Router()
const passport = require('passport')

 
//@desc     Authenticate with Google
//@rout     GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//@desc     Google Auth Callback
//@rout     GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/' }), (req, res) => {
        res.redirect('/')
    })

//@desc     Logout User
//@rout     /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
})

module.exports = router