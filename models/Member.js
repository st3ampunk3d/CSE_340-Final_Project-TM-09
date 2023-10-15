const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    joinedDate: {
        type: Date,
        //required: true
    },
    city: {
        type: String,
        //required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    dogs: {
        type: Array
    }
})

module.exports = mongoose.model('Member', MemberSchema)