var express = require('express')
var bodyParser = require("body-parser");
var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
var fs = require("fs");
app.use("/", express.static('public'));

app.post('/update',function(request,response){
 var test=request.body.test;
 fs.writeFile('config.txt', test, function() {
   response.send('k');
 });
});


var server = app.listen(8080, function () {

 var host = server.address().address
 var port = server.address().port

 console.log('Example app listening at http://%s:%s', host, port)

})
