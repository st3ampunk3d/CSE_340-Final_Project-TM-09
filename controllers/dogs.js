const Dog = require('../models/Dog');
const opts = { runValidators: true };

exports.getAll = async (req, res) => {
    //#swagger.tags=['dogs']
    const result = await Dog.find()
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
}

exports.getSingle = async (req, res) => {
    //#swagger.tags=['dogs']
    const result = await Dog.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
}

exports.createDog = async (req, res) => {
    //#swagger.tags=['dogs']
    const result = new Dog({
        name: req.body.name,
        breed: req.body.breed,
        birthday: req.body.birthday
    });
    try {
        await result.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(result);
    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(err);
    }
}

exports.updateDog = async (req, res) => {
    //#swagger.tags=['dogs']
    try {
        const post = await Dog.findById(req.params.id, opts);
        switch (req.body.name) {
            case req.body.name: post.name = req.body.name;
            case req.body.breed: post.breed = req.body.breed;
            case req.body.birthday: post.birthday = req.body.birthday;
            break;
        }

        await post.save();

        res.setHeader('Content-Type', 'application/json');
        res.status(204).send(post);

    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(err);
    }
}

exports.deleteDog = async (req, res) => {
    //#swagger.tags=['dogs'] 
    try {
        const result = await Dog.findByIdAndDelete(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(204).send();
    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(err);
    }
}