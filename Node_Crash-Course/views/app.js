const express  = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'hello friend', snipeet: 'pta ni ji kons anasha karta hai'},
        {title: 'great comics', snipeet: 'who the hell on pplnet earth read comic'},
        {title: 'osho', snipeet: 'one of the best philosphe that india can have '},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.redirect('/about', {title: 'About'});
});

app.get('/blogs/create',(req, res)=>{
    res.render('create', {title: 'Creat a new Blog' });
})


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'}); 
});