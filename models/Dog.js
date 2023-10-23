const mongoose = require('mongoose')
// const validator = require('../middleware/validator')

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true,
        // validate: [validator.knownBreed, 'This Breed is not recognized by the Kennel Club.']
    },
    birthday: {
        type: Date,
        required: true,
        // validate: [validator.validateDate, 'Birthday must be before the current date.']
    }
},

{
    collection: 'dogs',
    versionKey: false
})

module.exports = mongoose.model('Dog', DogSchema)