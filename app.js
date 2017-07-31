const express = require( 'express' );
const app = express();
const volleyball = require('volleyball')

app.use(volleyball);

app.listen(3000, function(){
    console.log('I\'m listening')
})

