// Require express library
const express = require('express');

// create router instance
const router = express.Router();

// include home_controller js file
const homeController = require('../controllers/home_controllers');

const bodyParser = require('body-parser');

//***** */ older parser use style deprecated now
// router.use(express.urlencoded());

// newer parser 
router.use(bodyParser.urlencoded({extended:false}));

// post method implement
router.post('/', homeController.createTask);

// export router for further use
module.exports = router;