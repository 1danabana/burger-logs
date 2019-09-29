// a file that routes all the actions from the other files together
var express = require('express');
var router = express.Router();
var burger = require ('../models/burgers.js');
// referecing the burgers.js file to pass the data through the function
router.get('/',function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index');
    })
})

module.exports = router;