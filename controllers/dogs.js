const Dog = require('../models/dog')

const opts = { runValidators: true }

const getAll = async (req, res) => {
    //#swagger.tags=['Dogs']
    const result = await Dog.find()
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(result)
}

const getSingle = async (req, res) => {
    //#swagger.tags=['Dogs']
    const result = await Dog.findById(req.params.id)

    res.setHeader('Content-Type', 'application/json')
    if (!result)  {
        res.status(418).send('Dog does not exist!')
    } else {
        res.status(200).send(result)
    }
}

const createDog = async (req, res) => {
    //#swagger.tags=['Dogs']
    const result = new Dog({
        name: req.body.name,
        breed: req.body.breed,
        color: req.body.color,
        birthday: req.body.birthday
    })

    try {
        await result.save()
        res.setHeader('Content-Type', 'application/json')
        res.status(201).send(result)
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}

const updateDog = async (req, res) => {
    //#swagger.tags=['Dogs']
    try {
        result = await Dog.findByIdAndUpdate(req.params.id, req.body, opts)
        res.setHeader('Content-Type', 'application/json')
        if (!result) {
            res.status(418).send('Dog does not exist!')
        } else {
            await result.save()
            res.status(204).send()
        }

    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}

const deleteDog = async (req, res) => {
    //#swagger.tags=['Dogs']
    try {
        const result = await Dog.findByIdAndDelete(req.params.id)
        res.setHeader('Content-Type', 'application/json')
        if (!result) {
            res.status(418).send('Dog does not exist!')
        } else {
            res.status(204).send()
        }
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}
module.exports = {
    getAll,
    getSingle,
    createDog,
    updateDog,
    deleteDog
}