const express = require('express');
const signRouter = express.Router();
signRouter.get('/',function(req,res){  
    res.render("signup")
});

module.exports = signRouter;
