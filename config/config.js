const path = require('path');

var config = {
              rootPath: path.normalize(__dirname + '/..'),
              port: 3000,
              dbURL: 'mongodb://localhost/widgets'
};
module.exports = config;