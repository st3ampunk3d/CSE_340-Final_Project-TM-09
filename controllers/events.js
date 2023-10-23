const Event = require('../models/Events');
const opts = { runValidators: true };

exports.getAll = async (req, res) => {
    //#swagger.tags=['events']
    const result = await Event.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
}

exports.getSingle = async (req, res) => {
    //#swagger.tags=['events']
    const result = await Event.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
}

exports.createEvent = async (req, res) => {
    //#swagger.tags=['events']
    const result = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location
    });
    try {
        await result.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(result);
    } catch (err) {
        res.setHeader('Content-Type','application/json');
        res.status(500).send(err);
    }
}

exports.updateEvent = async (req, res) => {
    //#swagger.tags=['events']
    try {
        const post = await Event.findByIdAndUpdate(req.params.id, opts);
        switch (req.body.title) {
            case req.body.title: post.title = req.body.title;
            case req.body.description: post.description = req.body.description;
            case req.body.date: post.date = req.body.date;
            case req.body.location: post.location = req.body.location;
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

exports.deleteEvent = async (req, res) => {
    //#swagger.tags=['events']
    try {
        const result = await Event.findByIdAndDelete(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(204).send();
    } catch (err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(err);
    }
}