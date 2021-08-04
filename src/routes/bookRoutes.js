const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom.jpg"
        },
        {
            title:'Harry Potter',
            author:'J.k.Rowling',
            genre:'Fantasy',
            img:"harry.jpg"
        },
        {
            title:'Pathumayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:"pathu.jpg"
        }
    ]
    booksRouter.get('/',function(req,res){  
        res.render("books",{
            nav,
            title :'Library',
            books
        });
    
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",{
            nav,
            title :'Library',
            book:books[id]
        })
        
    })
    return booksRouter;
}

module.exports = router;