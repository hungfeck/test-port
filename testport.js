const express = require('express');
var fs = require("fs");
const app = express();
var https = require('https');
const http = require('http');
var port = process.env.PORT || 3000;

var options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/shoppingnow.xyz/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/shoppingnow.xyz/privkey.pem')
};
httpsServer = https.createServer(options, app);

httpsServer.listen(port, function() {
    console.log('Audio call running port', port); 
})


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
})

// httpServer = http.Server( app);
// app.use(express.static('public'));


// httpServer.listen(port, function(){
//     console.log('Audio call running port', port);
// })