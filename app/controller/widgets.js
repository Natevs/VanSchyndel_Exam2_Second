const mongoose = require('mongoose');
const Widgets = mongoose.model('MyModel');

getModel = (req, res, next) => {
    const query = Widgets.find({}, (error, widgets) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widgets);
        }
    })
};

getModelByID = (req, res, next) => {
    const query = Widgets.findOne({ _id: req.params.id }, (error, widgets) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widgets);
        }
    })
};

getModelByName = (req, res, next) => {
    const query = Widgets.findOne({ name: req.params.name }, (error, widgets) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widgets);
        }
    })
};

createModel = (req, res, next) => {
    let property = new Widgets(req.body);
    property.save().then(resut => {
        res.status(201).json(result + 'Posted');
    });
};

updateModel = (req, res, next) => {
    Widgets.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, safe: true, multi: false })
    if (error) {
        return next(error);
    } else {
        res.status(200).json(model);
    }
};

deleteModel = (req, res, next) => {
    Widgets.remove({ _id: req.body.id }, (error, widgets) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(widgets);
        }
    })
};

    module.exports = {
        getModel,
        getModelByID,
        getModelByName,
        createModel,
        updateModel,
        deleteModel
    };