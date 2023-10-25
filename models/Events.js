const mongoose = require('mongoose');
const validator = require('../middleware/validator')

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        validate: [validator.futureDate, 'Event date must be in the future.']
    },
    location: {
        type: String,
        required: true
    }
},
{
    collection: 'events',
    versionKey: false
});

module.exports = mongoose.model('Events', EventSchema);