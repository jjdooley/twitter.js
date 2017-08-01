const express = require( 'express' );
const app = express();
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')
const tweetBot = require("./tweetBank.js")
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('I\'m listening')
})

// app.get('/stylesheets/styles.css', function(req,res){
//     res.sendFile(path.join(__dirname,'./public/stylesheets', 'styles.css'));
// })

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views'); // point nunjucks to the proper directory for templates

// in some file that is in the root directory of our application... how about app.js?

nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     if (err) {
//       console.log("Error occured")
//     }
//     console.log(output);
// });


