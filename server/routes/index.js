// INDEX.JS Routes

var express = require('express');
var router = express.Router();
var path = require('path');


// Main catch all that serves index.html
router.get('/',function(req,res) {
    var joinedpath = path.join(__dirname, '../public/assets/views/index.html');
    console.log(joinedpath);
    res.sendFile(joinedpath);
});


// Wildcard redirect to /
router.get('/*', function(req, res) {
    res.redirect('/');
});


module.exports = router;
