var express = require('express');
var router = express.Router();

var ctrlProducts = require('../controllers/products.controller');

router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);

module.exports = router;
