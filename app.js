const express = require('express');
//const booksRouter = express.Router();
const app = new express();
const nav = [{link :'/book',name :'Books'},{link :'/author',name :'Authors'},{link:'/login',name:'Login'},{link:'/Signup',name:'Sign Up'},{link:'/admin',name:'Add Book'},{link:'/admins',name:'Add Author'}]
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signRouter = require('./src/routes/signRoutes');
const logRouter = require('./src/routes/logRoutes');
const adminRouter = require('./src/routes/adminRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/book',booksRouter);
app.use('/author',authorRouter);
app.use('/signup',signRouter);
app.use('/login',logRouter);
app.use('/admin',adminRouter);
app.use('/admins',addauthorRouter);
app.get('/',function(req,res){  
    res.render("index",
    {
      nav,
        title :'Library'
    });

});
// var books = [
//     {
//         title:'Tom and jerry',
//         author:'Joseph Barbera',
//         genre:'Cartton',
//         img:"tom.jpg"
//     },
//     {
//         title:'Harry poter',
//         author:'J k Rowling',
//         genre:'Fantasy',
//         img:"harry.jpg"
//     },
//     {
//         title:'Pathumayude Aadu',
//         author:'Basheer',
//         genre:'Drama',
//         img:"pathu.jpg"
//     }
// ]
// booksRouter.get('/',function(req,res){  
//     res.render("books",{
//         nav : [{link :'/book',name :'Books'},{link :'/author',name :'Authors'}],
//         title :'Library',
//         books
//     });

// });
// booksRouter.get('/:id',function(req,res){
//     const id = req.params.id
//     res.render("book",{
//         nav : [{link :'/book',name :'Books'},{link :'/author',name :'Authors'}],
//         title :'Library',
//         book:books[id]
//     })
// })

app.listen(5555);