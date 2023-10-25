const router = require('express').Router()

const message = 'Kennel Club | CSE 341 - Week 5 | Final Project<br/><br/>Joshua Beale<br/>Melody Curran<br/><br/>'
 
router.use('/', require('./swagger'));

//@desc     Landing page
//@rout     GET /
router.get('/', (req, res) => {
    //res.setHeader('Content-Type', 'application/json')
    res.send(req.session.user !== undefined ? `${message}<span style="color:green;">Logged in as ${req.session.user.displayName}</span><br/><br/><a href="/auth/logout">Logout</a>` : `${message}<span style="color:red;">Logged Out</span><br/><br/><a href="/auth/google">Login with Google</a>`)
})

//@desc     Swagger API Documentation
//@rout     /api-docs
router.use('/', require('./swagger'))

//@desc     Kennel Klub Member Information
//@rout     GET /members
router.use('/members', require('./members'))

//@desc     Registered Kennel Klub Breeds
//@rout     GET /breeds
router.use('/breeds', require('./breeds'));

//@desc     Upcoming Events
//@rout     GET /events
router.use('/events', require('./events'));

//@desc     Kennel Klub Dog Information
//@rout     GET /dogs
router.use('/dogs', require('./dogs'));

//@desc     Admin Users (OAuth)
//@rout     GET /users
router.use('/users', require('./users'));

module.exports = router