const Member = require('../models/Member')

const opts = { runValidators: true }

const getAll = async (req, res) => {
    //#swagger.tags=['Members']
    const result = await Member.find()
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(result)
}

const getSingle = async (req, res) => {
    //#swagger.tags=['Members']
    const result = await Member.findById(req.params.id)

    res.setHeader('Content-Type', 'application/json')
    if (!result)  {
        res.status(418).send('Member does not exist!')
    } else {
        res.status(200).send(result)
    }
}

const createMember = async (req, res) => {
    //#swagger.tags=['Members']
    const result = new Member(req.body)

    try {
        await result.save()
        res.setHeader('Content-Type', 'application/json')
        res.status(201).send(result)
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}

const updateMember = async (req, res) => {
    //#swagger.tags=['Members']
    try {
        result = await Member.findByIdAndUpdate(req.params.id, req.body, opts)
        res.setHeader('Content-Type', 'application/json')
        if (!result) {
            res.status(418).send('Member does not exist!')
        } else {
            await result.save()
            res.status(204).send()
        }

    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(error)
    }
}

const deleteMember = async (req, res) => {
    //#swagger.tags=['Members']
    try {
        const result = await Member.findByIdAndDelete(req.params.id)
        res.setHeader('Content-Type', 'application/json')
        if (!result) {
            res.status(418).send('Member does not exist!')
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
    createMember,
    updateMember,
    deleteMember
}