const User = require('../models/User');
const opts = { runValidators: true };

exports.getAll = async (req, res) => {
    //#swagger.tags=['users']
    const result = await User.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
}

exports.getSingle = async (req, res) => {
    //#swagger.tags=['users']
    const result = await User.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
}

exports.createUser = async (req, res) => {
    //#swagger.tags=['users']
    const result = new User({
        googleId: req.body.googleId,
        displayName: req.body.displayName,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        image: req.body.image
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

exports.updateUser = async (req, res) => {
    //#swagger.tags=['users']
    try {
        const post = await User.findByIdAndUpdate(req.params.id, opts);

        switch (req.body.googleId) {
            case req.body.googleId: post.googleId = req.body.googleId;
            case req.body.displayName: post.displayName = req.body.displayName;
            case req.body.lastName: post.lastName = req.body.lastName;
            case req.body.firstName: post.firstName = req.body.firstName;
            case req.body.image: post.image = req.body.image;
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

exports.deleteUser = async (req, res) => {
    //#swagger.tags=['users']
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(204).send(result);

    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(err);
    }
}