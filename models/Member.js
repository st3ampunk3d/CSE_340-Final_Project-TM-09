const mongoose = require('mongoose')
const validator = require('../middleware/validator')

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    joinedDate: {
        type: Date,
        required: true,
        validate: [validator.validateDate, 'Member joined date cannot be in the future.']
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        validate: [validator.validatePhone, 'Phone number is invalid.']
    },
    email: {
        type: String,
        validate: [validator.validateEmail, 'Email address is invalid']
    },
    dogs: {
        type: Array
    }
},

{
    collection: 'members',
    versionKey: false
})

module.exports = mongoose.model('Member', MemberSchema)