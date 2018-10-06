var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/app', express.static(path.join(__dirname, '/../app')));
app.use('/static', express.static(path.join(__dirname, '/../resources')));

app.get('/', function(request, response) {
  response.sendFile('app.html', {root: './app'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})