var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var user = req.session.oauthUser;
    res.render('index', { title: '微壁纸', user: user });

});

module.exports = router;
