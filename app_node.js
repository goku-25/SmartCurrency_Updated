var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
//var router=express.Router();
app.use(bodyParser.json());
//app.use(express.bodyParser());
app.use(require('./controller'));
app.use(cors());

//router.use('/service',require('./service'));
// module.exports=router;

app.listen('8080', function() {

    console.log("server is running");
});