const express = require('express');
const logRouter = express.Router();
logRouter.get('/',function(req,res){  
    res.render("login")
});

module.exports = logRouter;
