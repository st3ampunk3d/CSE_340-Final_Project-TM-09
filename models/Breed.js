const mongoose = require('mongoose');
const validator = require('../middleware/validator')

const BreedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ['mini', 'small', 'medium', 'large', 'giant'],
        required: true
    },
    energy: {
        type: String,
        enum: ['low', 'moderate', 'high'],
        required: true
    }
},

{
    collection: 'breeds',
    versionKey: false
});

module.exports = mongoose.model('Breed', BreedSchema);