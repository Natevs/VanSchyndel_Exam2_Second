const express = require('express');
const mongoose = require('mongoose');

var app = express();
const config = require('./config')
//const customerRoutes = require('../app/routes/routes')

//app.use('/routes', customerRoutes);

module.exports = function (app, config) {
    try {
        mongoose.connect(
            config.dbURL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected")
        );
    } catch (e) {
        console.log("could not connect");
    }
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));

    app.use(express.static(config.rootPath + '/public'));

    app.use(express.json());

    require(config.rootPath + '/app/model/model');

    const routes = require(config.rootPath + '/app/routes/routes');
    app.use('', routes);

    app.use(function (req, res) {
        res.type('text/plan');
        res.status(404);
        res.send('The resource you requested cannot be found');
    })
    app.use(function (err, req, res, next) {
        console.log('500 error', 'error');
        console.error(err.stack);
        res.type('text/plan');
        res.status(500);
        res.send('500 Server Error');
    })
}

