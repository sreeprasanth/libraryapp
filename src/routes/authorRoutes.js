const express = require('express');
const authorRouter = express.Router();
function arouter(nav){
    var authors = [
        {
            title:'Baiju N. Nair',
            author:'Kerala Sahitya Akademi Award',
            genre:'Travelogue',
            img:"baiju.jpg"
        },
        {
            title:'M.Mukundan',
            author:'Kerala Sahitya Akademi Award',
            genre:'Non Fiction',
            img:"mukundan.jpg"
        },
        {
            title:'M.T.Vasudevan Nair',
            author:'Jnanpith Award',
            genre:'Novel',
            img:"mt.jpg"
        }
    ]
    authorRouter.get('/',function(req,res){  
        res.render("authors",{
            nav,
            title :'Library',
            authors
        });
    
    });
    authorRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render("author",{
            nav,
            title :'Library',
            author:authors[i]
        })
        
    })
    return authorRouter;
}

module.exports = arouter;