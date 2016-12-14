var express = require('express');
var router = express.Router();
var info = require('../info.json');

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About',
        name: 'Himanshu',
        data: info
    });
});

module.exports = router;
