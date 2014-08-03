var express = require('express');
var router = express.Router();

// var Schema = require('caminte').Schema;
// var schema = new Schema('redis', {port: 6379});
// var User = schema.define('User', {
//     name:         String,
//     joinedAt:     Date
// });

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
