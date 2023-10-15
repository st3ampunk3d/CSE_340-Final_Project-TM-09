const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const data = require('./config/connect')


const app = express()
const port = process.env.PORT || 8080

const message = 'Joshua Beale | CSE 341 - Week 4 | Project 2 (Pt 2)<br/><br/>'

// Config
data.initDb((err, data) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`)
        })
    }
})

require('./config/passport')(passport)

app
    //To make sure the route will work across sites
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-key'
        );
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })


    //Sessions
    .use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
        //cookie: { secure: true }
    }))

    // Passport middleware
    .use(passport.initialize())
    .use(passport.session())

    //routes
    .use('/', require('./routes'))
    .use('/auth', require('./routes/auth'))
