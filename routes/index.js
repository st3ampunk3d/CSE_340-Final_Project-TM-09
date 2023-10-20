const router = require('express').Router()

const message = 'Kennel Club | CSE 341 - Week 5 | Final Project<br/><br/>Joshua Beale<br/>Melody Curran<br/><br/>'
 
router.use('/', require('./swagger'));
//@desc     Landing page
//@rout     GET /
router.get('/', (req, res) => {
    res.send(req.user !== undefined ? `${message}<span style="color:green;">Logged in as ${req.user.displayName}</span><br/><br/><a href="/auth/logout">Logout</a>` : `${message}<span style="color:red;">Logged Out</span><br/><br/><a href="/auth/google">Login with Google</a>`)
})

//@desc     Swagger API Documentation
//@rout     /api-docs
router.use('/', require('./swagger'))

router.use('/members', require('./members'))

module.exports = router