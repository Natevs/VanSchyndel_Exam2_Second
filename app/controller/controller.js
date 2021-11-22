const mongoose = require('mongoose')
const Property = mongoose.model('MyModel');

getModel = (req, res, next) => {
    const query = Property.find({}, (error, model) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(model);
        }
    })
};

getModelByID = (req, res, next) => {
    const query = Property.findOne({ _id: req.params.id }, (error, model) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(model);
        }
    })
};

getModelByName = (req, res, next) => {
    const query = Property.findOne({ name: req.params.name }, (error, model) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(model);
        }
    })
};

createModel = (req, res, next) => {
    let property = new Property(req.body);
    property.save().then(resut => {
        res.status(201).json(result + 'Posted');
    });
};

updateModel = (req, res, next) => {
    Property.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, safe: true, multi: false })
    if (error) {
        return next(error);
    } else {
        res.status(200).json(model);
    }
};

deleteModel = (req, res, next) => {
    Property.remove({ _id: req.body.id }, (error, model) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(model);
        }
    });

    module.exports = {
        getModel,
        getModelByID,
        getModelByName,
        createModel,
        updateModel,
        deleteModel
    };