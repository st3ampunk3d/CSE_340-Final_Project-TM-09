const Breed = require('../models/Breed');

const opts = { runValidators: true };

exports.getAll = async (req, res) => {
    //#swagger.tags=['breeds']
    const result = await Breed.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
}

exports.getSingle = async (req, res) => {
    //#swagger.tags=['breeds']
    const result = await Breed.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
}

exports.createBreed = async (req, res) => {
    //#swagger.tags=['breeds']
    const result = new Breed({
        name: req.body.name,
        size: req.body.size,
        energy: req.body.energy
    });
    try {
        await result.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(result);
    } catch(err) {
        res.setHeader('Content-Type', 'application/json')
        res.status(500).send(err);
    }
}

exports.updateBreeds = async (req, res) => {
    //#swagger.tags=['breeds']
    try {
        const post = await Breed.findById(req.params.id, opts);

        switch (req.body.name) {
            case req.body.name: post.name = req.body.name;
            case req.body.size: post.size = req.body.size;
            case req.body.energy: post.energy = req.body.energy;
            break;
        }

        await post.save();

        res.setHeader('Content-Type', 'application/json');
        res.status(204).send(post);
    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send(err);
    }
}

exports.deleteBreed = async (req, res) => {
    //#swagger.tags=['breeds']
    try {
        const result = await Breed.findByIdAndDelete(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(204).send();
    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(err);
    }
}