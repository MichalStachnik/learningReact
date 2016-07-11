var express = require('express');
var app = express();

//express.static exposes a file to the web server
app.use(express.static('public'));

app.listen(8888, function(){
    
   console.log('express server running on 8888'); 
    
});