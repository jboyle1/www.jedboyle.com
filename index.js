// Require 'express'.
const express = require('express');
// Place express module in a variable called 'app'.
const app = express();
// Require path for static file use.
const path = require('path');
// Require handlebars.
const exphbs = require('express-handlebars');

// Create public middleware so static files are accessible.
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/img/favicon')));
app.use(express.static(path.join(__dirname, 'public/img/logo-gif')));
app.use(express.static(path.join(__dirname, 'public/js/handlebars')));

// Create default template layout called main and place in a folder called 'layouts' also inside 'views'.
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage route (may relocate to a routes directory)
app.get('/', (req, res) => res.render('index'));

// To run the web server, create a variable called PORT that evaluates to a hosted port or a local port
const PORT = process.env.PORT || 5000;
// run express 'listen' on 'app' on 'PORT' with a callback function second parameter that console logs that the server is running on the specific port.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



