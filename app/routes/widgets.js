const express = require('express');
const router = express.Router();
const theController = require('../controller/widgets');

//retieves all
router.get('/widgets',theController.getModel );

//retrieves specified by id/primary key
router.get('/widgets/:id', theController.getModelByID);

//retrieves specified by name parameter
router.get('/widgets/name/:name', theController.getModelByName);

//adds 
router.post('/widgets', theController.updateModel);

//creates a new
router.put('/', theController.createModel);

//removes specified by id
router.delete('/widgets/:id', theController.deleteModel);

//updates based on id
router.patch('/:id', (req, res, next) =>{
    res.status(204).json( req.params.id + 'updated');
});

module.exports = router;