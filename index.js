const express = require('express');
const app = express();

app.get('/', function(req, res) {

    res.send('<h3>Hello Node on Heroku</h3>'<a href="https://my-super-cool-awesome-project1.herokuapp.com/" /a>);

});

app.get('/about', function(req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.listen(process.env.PORT || 3000);