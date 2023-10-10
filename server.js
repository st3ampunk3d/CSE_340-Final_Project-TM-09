const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const data = require('./db/connect')


const port = process.env.port || 8080
const message = 'Joshua Beale | CSE 341 - Week 4 | Project 2 (Pt 2)<br/><br/>'

app

    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Z-Key')
        res.setHeader('Access-Control-Allow-Mehtods', 'GET, POST, PUT, DELETE, OPTIONS')
        next()
    })

    .use('/', require('./routes'));

app.get('/', (req, res) => {
    res.send(`${message}`)
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




