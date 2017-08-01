const express = require( 'express' );
const app = express();
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')
const tweetBot = require("./tweetBank.js")


console.log(tweetBot.find(function(prop){return (prop.name === "Sam")}))

app.use(volleyball);

app.listen(3000, function(){
    console.log('I\'m listening')
})

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

// in some file that is in the root directory of our application... how about app.js?
const locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    if (err) {
      console.log("Error occured")
    }
    console.log(output);
});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get("/", function(req,res) {
  res.render( 'index', {title: 'Hall of Fame', people: locals.people} );
})
