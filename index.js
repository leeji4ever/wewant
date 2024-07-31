const express = require('express'); 
const app = express(); 
const path = require('path'); 
const session = require('express-session')

app.use(express.static(__dirname + '/public'));
// Setting EJS as the view engine
app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.get('/', (req, res) => {
    res.render('main');
	
});

app.get('/views/:name', (req, res) => {
    res.render(req.params.name);
});

app.use('/images',express.static(__dirname +'/images'));
app.use('/css',express.static(__dirname +'/css'));
app.use('/scripts',express.static(__dirname +'/scripts'));
app.use('/json',express.static(__dirname +'/json'));
app.use('/views',express.static(__dirname +'/views'));




//Server is listening on port 5000
app.listen(5000, () => {
    console.log(`App listening at port 5000`);
  })