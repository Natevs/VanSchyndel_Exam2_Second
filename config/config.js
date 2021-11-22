//currently not in use
const path = require('path');

var config = {
              rootPath: path.normalize(__dirname + '/..'),
              //app: { name: ' Exam2pre' },
              port: 3000,
              dbURL: 'mongodb://localhost/Exam2pre',
};
module.exports = config;