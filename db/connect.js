const dotenv = require('dotenv')
dotenv.config()

let _db

const initDb = (callback) => {
    const mongoose = require('mongoose')
    if (_db) {
        console.log('Db is already initialized!')
        return callback(null, _db)
    }
    mongoose
        .connect(process.env.DB_URI,
        {useNewUrlParser: true})
        .then((client) => {
            _db = client;
            callback(null, _db)
        })
        .catch((err) => {
            callback(err)
        })
}

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized')
    }
    return _db
}

module.exports = {
    initDb,
    getDb
}