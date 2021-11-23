const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theSchema = new Schema({
    todo: {type: String, require: true},
    Details: {type: String},
    dateDue: {type: Date, default: Date.now},
    dateCreated: {type: Date, default: Date.now},
    status: {type: Boolean, type: Enumerator ['Todo','In Process', 'Done'], default: "Todo"}// come back no internet access
})

module.export = mongoose.model('MyModel', theSchema);