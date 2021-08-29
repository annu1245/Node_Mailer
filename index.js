const express = require('express');
const bodyParser = require('body-parser');
app = express();
var router = require('./routes/mailServer.js');




app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use('/', router)


app.listen('3000', ()=>{
    console.log("app Started..")
});