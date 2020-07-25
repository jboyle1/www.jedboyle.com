// Require 'express' for templating.
const express = require('express');
// Place express module in a variable called 'app'.
const app = express();
// Require path for static file use.
const path = require('path');
// Require handlebars for data templating.
const exphbs = require('express-handlebars');
// Require 'fs' for PDF viewer.
fs = require('fs')



// Create public middleware so static files are accessible.
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/img/favicon')));
app.use(express.static(path.join(__dirname, 'public/img/logo-gif')));
app.use(express.static(path.join(__dirname, 'public/img/resume')));
app.use(express.static(path.join(__dirname, 'public/img/chambers')));
app.use(express.static(path.join(__dirname, 'public/js/handlebars')));
app.use(express.static(path.join(__dirname, 'public/js/git-hub-info')));
app.use(express.static(path.join(__dirname, 'public/js/email-js')));
app.use(express.static(path.join(__dirname, 'public/js/pdfs')));


// Create default template layout called main and place in a folder called
// 'layouts' also inside 'views'.
app.engine('.hbs', exphbs({extname: 'hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// Portfolio dropdown

const context = {
    toggleNav: [
        {
            name: 'Musicon site',
            link: 'musicon.html',
            topic: 'Handlebars'
        }, {
            name: 'E Y App',
            link: 'express-yourself.html',
            topic: 'node.js/express.js'
        }, {
            name: 'Empty',
            link: 'musicon.html',
            topic: 'Handlebars'
        },{
            name: 'PHP Calculator App',
            link: 'php-calc.html',
            topic: 'PHP'
        }, {
            name: 'Rock Paper Scissors App',
            link: 'rps.html',
            topic: 'JS'
        }, {
            name: 'Race Registration App',
            link: 'race-day.html',
            topic: 'JS'
        }, {
            name: 'Magic Eight Ball App',
            link: 'm8b.html',
            topic: 'JS'
        }, {
            name: 'Games of Chance App',
            link: 'games-of-chance.html',
            topic: 'JS'
        }, {
            name: 'Tasty Treats Site',
            link: 'apption.html',
            topic: 'node.js'
        },{
            name: 'Paddy Boyle Site',
            link: 'pad-004.html',
            topic: 'JS'
        }, {
            name: 'Phoenix B Site',
            link: 'express-yourself.html',
            topic: 'JS/Snipcart'
        },{
            name: 'Jackie S Site',
            link: 'Jackie-2020.html',
            topic: 'JS/Snipcart'
        },{
            name: 'React Exercise',
            link: 'react-app-001.html',
            topic: 'JS/React.js'
        }, {
            name: 'Bitesize API',
            link: 'bitesize.html',
            topic: 'JS'
        }, {
            name: 'Wordsmith API',
            link: 'wordsmith.html',
            topic: 'JS'
        }, {
            name: 'Piano Keys App',
            link: 'piano.html',
            topic: 'JS'
        }, {
            name: 'Gameboard App',
            link: 'gameboard.html',
            topic: 'jQuery'
        }, {
            name: 'Web Safe Font App',
            link: 'type.html',
            topic: 'jQuery'
        }, {
            name: 'Feedster App',
            link: 'feedster.html',
            topic: 'PHP'
        }, {
            name: 'Trivia Card',
            link: 'trivia.html',
            topic: 'jQuery'
        }, {
            name: 'Madison Site',
            link: 'mad.html',
            topic: 'jQuery'
        }, {
            name: 'Task List',
            link: 'task-list.html',
            topic: 'Python/Flask'
        }, {
            name: 'Star Wars API',
            link: 'sw.html',
            topic: 'Json'
        }, {
            name: 'Academia Stats',
            link: 'ga.html',
            topic: 'DC.js/Crossfilter'
        }, {
            name: 'Neighbourhood Site',
            link: 'nfc.html',
            topic: 'Bootstrap'
        }, {
            name: 'Connect Four Game',
            link: 'connect-4.html',
            topic: 'JS/jQuery'
        }, {
            name: 'DRY App',
            link: 'dry.html',
            topic: 'Bootstrap'
        }, {
            name: 'Silent Signs',
            link: 'ss.html',
            topic: 'JS/Bootstrap'
        }, {
            name: 'My Website (old)',
            link: 'my-website.html',
            topic: 'Bootstrap/JS'
        }, {
            name: 'Tic Tac Toe Game',
            link: 'tic-tac-toe.html',
            topic: 'JS'
        }, {
            name: 'Stopwatch App',
            link: 'test-stopwatch.html',
            topic: 'JS'
        }, {
            name: 'Poster',
            link: 'test-poster.html',
            topic: 'HTML5/CSS3'
        }, {
            name: 'Jackie S Site (old)',
            link: 'Jackie.html',
            topic: 'Bootstrap'
        }
    ]
};

// Routes

app.get('/', (req, res) => res.render('index', context));
app.get('/resume', (req, res) => res.render('resume', context));
app.get('/git-hub', (req, res) => res.render('git-hub', context));
app.get('/contact', (req, res) => res.render('contact', context));


// Route for PDF viewer
app.get('/cv', function (req, res) {
    var filePath = "/public/pdfs/jedboylecv2020.pdf";
    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

// To run the web server, create a variable called PORT that evaluates to a
// hosted port or a local port
const PORT = process.env.PORT || 5000;
// run express 'listen' on 'app' on 'PORT' with a callback function second
// parameter that console logs that the server is running on the specific port.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


