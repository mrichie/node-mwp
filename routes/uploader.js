var express = require('express');
var router = express.Router();

/* GET Uploader . */
router.get('/', function(req, res) {
    var user = req.session.oauthUser;
    if(user){
	res.render('uploader', { title: '微壁纸', user: user });
    }
    else{

    }
});

module.exports = router;
