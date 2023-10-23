const breeds = require('../models/Breed')

const knownBreed = async (breed) => {
    const knownBreeds = new Array()
    const allBreeds = (await breeds.find({}, 'name -_id'))
    for (var name in allBreeds) {
        knownBreeds.push(allBreeds[name]["name"])
    }
    return (knownBreeds.includes(breed))
}

const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const validateDate = (date) => {
    today = new Date()
    input = new Date(date)
    return input <= today
}

const validatePhone = (phone) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return re.test(phone)
}

module.exports = {
    knownBreed,
    validateEmail,
    validateDate,
    validatePhone
}