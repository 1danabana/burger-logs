// a file that routes all the actions from the other files together
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index');
})

module.exports = router;