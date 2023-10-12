const Owner = require('../models/owner')

const opts = { runValidators: true }

const getAll = async (req, res) => {
    //#swagger.tags=['Owners']
    const result = await Owner.find()
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(result)
}

const getSingle = async (req, res) => {
    //#swagger.tags=['Owners']
    const result = await Owner.findById(req.params.id)

    res.setHeader('Content-Type', 'application/json')
    if (!result)  {
        res.status(418).send('Owner does not exist!')
    } else {
        res.status(200).send(result)
    }
}

const createOwner = async (req, res) => {
    //#swagger.tags=['Owners']
    const result = new Owner(req.body)

    try {
        await result.save()
        res.setHeader('Content-Type', 'application/json')
        res.status(201).send(result)
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}

const updateOwner = async (req, res) => {
    //#swagger.tags=['Owners']
    try {
        result = await Owner.findByIdAndUpdate(req.params.id, req.body, opts)
        res.setHeader('Content-Type', 'application/json')
        if (!result) {
            res.status(418).send('Owner does not exist!')
        } else {
            await result.save()
            res.status(204).send()
        }

    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}

const deleteOwner = async (req, res) => {
    //#swagger.tags=['Owners']
    try {
        const result = await Owner.findByIdAndDelete(req.params.id)
        res.setHeader('Content-Type', 'application/json')
        if (!result) {
            res.status(418).send('Owner does not exist!')
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
    createOwner,
    updateOwner,
    deleteOwner
}