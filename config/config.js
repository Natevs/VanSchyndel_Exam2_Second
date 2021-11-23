const path = require('path');

var config = {
              rootPath: path.normalize(__dirname + '/..'),
              port: 3000,
              dbURL: 'mongodb+srv://VanSchyndel:jT71bQIQCCezu5ET@cluster0.lkeht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
};
module.exports = config;