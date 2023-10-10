const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const data = require('./db/connect')
const passport = require('passport')
const session = require('express-session')

require('./db/passport')(passport)

const port = process.env.port || 8080
const message = 'Joshua Beale | CSE 341 - Week 4 | Project 2 (Pt 2)<br/><br/>'

app
    .use(bodyParser.json())
    .use(session({
        secret: "pigeon poop",
        resave: false,
        saveUninitialized: false,
        //cookie: {secure: true}
    }))

    .use(passport.initialize())
    .use(passport.session())

    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Z-Key')
        res.setHeader('Access-Control-Allow-Mehtods', 'GET, POST, PUT, DELETE, OPTIONS')
        next()
    })

    .use('/', require('./routes'));

app.get('/', (req, res) => {
    res.send(req.session.user !== undefined ? `${message}<span style="color:green;">Logged in as ${req.session.user.userName}</span>` : `${message}<span style="color:red;">Logged Out</span>`)
})
app.get('/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs', session: false}),
    (req, res) => {
        req.session.user = req.user,
        res.redirect('/')
    })

data.initDb((err, data) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`)
        })
    }
})




