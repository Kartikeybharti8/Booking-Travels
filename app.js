const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require("mysql");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

//for using reading /parsing applicaton/urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse applcation/json
app.use(bodyParser.json());

app.use(express.static("public"));


//using template engine
app.engine("hbs", exphbs.engine({extname: ".hbs"}));
app.set("view engine","hbs");

app.get("",(req,res)=>{
    res.render('home')
})

app.listen( port ,()=>{
    console.log(`listening at port no. ${port}`);
})