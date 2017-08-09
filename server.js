// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", function (request, response) {
  var dateVal = request.params.date;
  if (dateVal == parseInt(dateVal, 10)){
    var date = new Date(dateVal*1000);
    var data = {
      "unix": dateVal,
      "natural": date.toString()
    };
    response.send(data);
  }
  else{
    var date = new Date(dateVal);
    var data = {
      "unix": date.getTime() / 1000,
      "natural": date.toString()
    }
    if (date.toString() != "Invalid Date")
      response.send(data);
    else
      response.send({
        "unix": null,
        "natural": null
      });
  }

  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
