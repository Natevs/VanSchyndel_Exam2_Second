const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theSchema = new Schema({
    name: {type: String, require: true},
    dteCreated: {type: Date, default: Date.now},
    active: {type: Boolean, default: true}
})

module.export = mongoose.model('MyModel', theSchema);