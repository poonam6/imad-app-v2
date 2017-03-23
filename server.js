var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res_send('article one will be here Greetings!!!We are hiring .NET developers & senior developers who can join us in 15 to 20 days.SCHEDULE INTERVIEW DRIVE for .NET development Professionals on Saturday, 11th April 2015 between 10:00 AM to 2:00 PM. Note: Kindly send across your resume & confirm your time slot.Interested Candidates can come for Walk-in at below Venue:Faichi Solutions Pvt. Ltd.Pride Purple Accord,');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
