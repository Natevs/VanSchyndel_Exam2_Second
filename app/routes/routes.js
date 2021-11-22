const express = require('express');
const router = express.Router();
const theController = require('../controller/controller');
//const customerController = require('../controllers/customers');

//retrieves all by using the controller file
router.get('/model',theController.getModel );

//retrieves specified by id/primary key
router.get('/model/:id', theController.getModelByID);

//retrieves specified by name parameter
router.get('/model/name/:name', theController.getModelByName);

//adds 
router.post('/model', theController.updateModel);

//creates a new
router.put('/', theController.createModel);

//removes specified by id
router.delete('/model/:id', theController.deleteModel);

//updates based on id
// router.patch('/:id', (req, res, next) =>{
//     res.status(204).json( req.params.id + 'updated');
// });

module.exports = router;