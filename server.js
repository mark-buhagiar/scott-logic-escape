const express = require('express');
const path = require('path');
// const cors = require('cors');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', function(req,res){
  return res.send('test')
});

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = 8080;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
})