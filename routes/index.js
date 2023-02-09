// Require express library
const express = require('express');

// create router instance
const router = express.Router();

// include home_controller js file
const homeController = require('../controllers/home_controllers');

// get method implement
router.get('/', homeController.home);

// create routes

router.use('/create-task', require('./create-task'));
router.use('/delete-task', require('./delete-task'));

// export router for further use
module.exports = router;