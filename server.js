const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const data = require('./config/connect')


const app = express()
const port = process.env.PORT || 8080

// Config
require('./config/passport')(passport)

app
    //Sessions
    .use(bodyParser.json())
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

data.initDb((err, data) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`)
        })
    }
})