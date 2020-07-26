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
app.use(express.static(path.join(__dirname, 'public/img/my-website-new')));
app.use(express.static(path.join(__dirname, 'public/img/json-generator')));
app.use(express.static(path.join(__dirname, 'public/img/musicon')));
app.use(express.static(path.join(__dirname, 'public/img/rock-paper-scissors')));
app.use(express.static(path.join(__dirname, 'public/img/php-calc')));
app.use(express.static(path.join(__dirname, 'public/img/race-day')));
app.use(express.static(path.join(__dirname, 'public/img/magic-eight-ball')));
app.use(express.static(path.join(__dirname, 'public/img/games-of-chance')));
app.use(express.static(path.join(__dirname, 'public/img/tasty-treats')));
app.use(express.static(path.join(__dirname, 'public/img/react-exercise')));
app.use(express.static(path.join(__dirname, 'public/img/bitesize')));
app.use(express.static(path.join(__dirname, 'public/img/wordsmith')));
app.use(express.static(path.join(__dirname, 'public/img/piano-keys')));
app.use(express.static(path.join(__dirname, 'public/img/gameboard')));
app.use(express.static(path.join(__dirname, 'public/img/web-safe-fonts')));
app.use(express.static(path.join(__dirname, 'public/img/feedster')));
app.use(express.static(path.join(__dirname, 'public/img/madison-square-market')));
app.use(express.static(path.join(__dirname, 'public/img/j-summerfield-ceramics')));
app.use(express.static(path.join(__dirname, 'public/img/p-boyle-photography')));
app.use(express.static(path.join(__dirname, 'public/img/phoenix-beading')));
app.use(express.static(path.join(__dirname, 'public/img/task-list')));
app.use(express.static(path.join(__dirname, 'public/img/gender-in-academia')));
app.use(express.static(path.join(__dirname, 'public/img/neighbourhood-for-change')));
app.use(express.static(path.join(__dirname, 'public/img/connect-four')));
app.use(express.static(path.join(__dirname, 'public/img/dont-restrict-yourself')));
app.use(express.static(path.join(__dirname, 'public/img/my-website')));
app.use(express.static(path.join(__dirname, 'public/img/tic-tac-toe')));
app.use(express.static(path.join(__dirname, 'public/img/stopwatch')));
app.use(express.static(path.join(__dirname, 'public/img/css-poster')));
app.use(express.static(path.join(__dirname, 'public/img/j-summerfield-ceramics-old')));
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
    ], workHistory: [
        {
            dates: '01/2019 - 01/2020',
            link: 'shorturl.at/LZ345',
            image: 'ci.png',
            alt: 'Code Institute, Full Stack Coding Bootcamp',
            name: 'Code Institute',
            inst: 'Edinburgh Napier Uni Diploma',
            info: 'Full Stack Coding Bootcamp'
        }, {
            dates: '12/2019 - 01/2020',
            link: 'https://www.udemy.com/',
            image: 'udemy.png',
            alt: 'Udemy, Full Stack Coding Bootcamp',
            name: 'Udemy',
            inst: 'Python and Django',
            info: 'Full Stack Coding Bootcamp'
        }, {
            dates: '04/2018 - 05/2018',
            link: 'https://www.elixel.co.uk/',
            image: 'elixel.png',
            alt: 'Udemy, UX/UI placement',
            name: 'Elixel',
            inst: 'App Developers',
            info: 'UX/UI placement'
        }, {
            dates: '09/2016 - 09/2019',
            link: 'shorturl.at/pMQW8',
            image: 'plym.png',
            alt: 'Udemy, Graphic Design Degree',
            name: 'Plymouth College of Art',
            inst: 'Graphic Design Degree',
            info: 'Freelance web development'
        }, {
            dates: '11/2015 - 02/2016',
            link: 'http://www.ptgltd.co.uk/',
            image: 'fb_logo.jpg',
            alt: 'PTG Engineering Ltd, Contractor',
            name: 'PTG Engineering Ltd',
            inst: 'CNC Machine Programmer',
            info: 'Contractor'
        }, {
            dates: '2015 - 2016',
            link: 'https://www.cityplym.ac.uk/courses/naval-architecture/',
            image: 'plymc.jpeg',
            alt: 'Naval Architecture',
            name: 'Plymouth City College',
            inst: 'Naval Architecture',
            info: 'NVQ Level 4 Foundation (1 year)'
        }, {
            dates: '05/2015 - 09/2015',
            link: 'https://www.uhvdesign.com/',
            image: 'uhv.png',
            alt: 'CNC Machine Programmer, Contractor',
            name: 'UHV Design Ltd',
            inst: 'CNC Machine Programmer',
            info: 'Contractor'
        }, {
            dates: '09/2013 - 09/2014',
            link: 'https://www.sundyne.com/products/hmd-kontro-pumps/',
            image: 'hmd.png',
            alt: 'CNC Machine Programmer, Contractor',
            name: 'HMD Kontro Ltd',
            inst: 'CNC Machine Programmer',
            info: 'Contractor'
        }, {
            dates: '06/2004 - 05/2012',
            link: 'http://www.hivac.co.uk/',
            image: 'hivac-engineering.jpg',
            alt: 'CNC Machine Programmer, Contractor',
            name: 'Hivac Engineering Ltd',
            inst: 'CNC Machine Programmer',
            info: '& fitter/fabricator FT'
        }, {
            dates: '06/2004 - 05/2007',
            link: 'http://www.sussexcoast.ac.uk/',
            image: 'logo.png',
            alt: 'Manufacturing Engineering, Merit',
            name: 'Hastings College',
            inst: 'BTEC National Cert Level 3',
            info: 'Manufacturing Engineering, Merit'
        },
    ], portfolio: [
        {
            link: 'my-website-new.hbs',
            image: '3my-website-new.png',
            alt: 'www.jedboyle.com',
            name: 'www.jedboyle.com',
            languages: 'HTML, CSS, Node.js, Express, Handlebars'
        }, {
            link: 'json-generator.hbs',
            image: '1json-generator.png',
            alt: 'JSON Generator App with API',
            name: 'JSON Generator App with API',
            languages: 'HTML, CSS, JS, AJAX'
        }, {
            link: 'musicon.hbs',
            image: 'musicon-001.png',
            alt: 'musicon',
            name: 'Musicon',
            languages: 'HTML, CSS, JS, Handlebars'
        }, {
            link: 'rock-paper-scissors.hbs',
            image: 'rps-001.png',
            alt: 'rock paper scissors Game',
            name: 'Rock Paper Scissors Game',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'php-calc.hbs',
            image: '1php-calc.png',
            alt: 'PHP Calculator App',
            name: 'PHP Calculator App',
            languages: 'HTML, CSS, PHP'
        }, {
            link: 'race-day.hbs',
            image: '1race-day.png',
            alt: 'race day registration day',
            name: 'Race Day Registration Day',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'magic-eight-ball.hbs',
            image: '1magic-eight-ball.png',
            alt: 'Magic Eight Ball App',
            name: 'Magic Eight Ball App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'games-of-chance.hbs',
            image: '1games-of-chance.png',
            alt: 'Games of Chance App',
            name: 'Games of Chance App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'tasty-treats.hbs',
            image: '1tasty-treats.jpg',
            alt: 'Tasty Treats Form',
            name: 'Tasty Treats Form',
            languages: 'HTML, CSS, JS, Node.js'
        }, {
            link: 'react-exercise.hbs',
            image: '1react-exercise.png',
            alt: 'React Exercise',
            name: 'React Exercise',
            languages: 'HTML, CSS, JS, React.js'
        }, {
            link: 'bitesize.hbs',
            image: '1bitesize.png',
            alt: 'Bitesize App with API',
            name: 'Bitesize App with API',
            languages: 'HTML, CSS, JS, AJAX'
        }, {
            link: 'wordsmith.hbs',
            image: '1wordsmith.png',
            alt: 'Wordsmith App with API',
            name: 'Wordsmith App with API',
            languages: 'HTML, CSS, JS, AJAX'
        }, {
            link: 'piano-keys.hbs',
            image: '1piano-keys.png',
            alt: 'Piano Keys App',
            name: 'Piano Keys App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'gameboard.hbs',
            image: '1gameboard.png',
            alt: 'Gameboard App',
            name: 'Gameboard App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'web-safe-fonts.hbs',
            image: '1web-safe-fonts.png',
            alt: 'Web Safe Font Preview App',
            name: 'Web Safe Font Preview App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'feedster.hbs',
            image: '1feedster.png',
            alt: 'Feedster App',
            name: 'Feedster App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'madison-square-market.hbs',
            image: '1madison.png',
            alt: 'Madison Square Market App',
            name: 'Madison Square Market App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'phoenix-beading.hbs',
            image: '1phoenix-beading.png',
            alt: 'www.phoenixbeading.co.uk',
            name: 'www.phoenixbeading.co.uk',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'j-summerfield-ceramics.hbs',
            image: '1j-summerfield-ceramics.png',
            alt: 'www.jsummerfieldceramics.co.uk',
            name: 'www.jsummerfieldceramics.co.uk',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'p-boyle-photography.hbs',
            image: '1p-boyle-photography.png',
            alt: 'www.pboylephotography.com',
            name: 'www.pboylephotography.com',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'task-list.hbs',
            image: '1task-list.png',
            alt: 'www.task-list.com',
            name: 'Task List App',
            languages: 'HTML, CSS, Python, Flask'
        }, {
            link: 'gender-in-academia.hbs',
            image: '1gender-in-academia.png',
            alt: 'www.genderinacademia.co.uk',
            name: 'www.genderinacademia.co.uk',
            languages: 'HTML, CSS, DC.js, Crossfilter'
        }, {
            link: 'neighbourhood-for-change.hbs',
            image: '1neighbourhood-for-change.jpg',
            alt: 'www.neighbourhoodforchange.co.uk',
            name: 'www.neighbourhoodforchange.co.uk',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'connect-four.hbs',
            image: '4connect-four.jpg',
            alt: 'Connect Four Game',
            name: 'Connect Four Game',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'dont-restrict-youreself.hbs',
            image: '11dont-restrict-yourself.jpg',
            alt: 'www.dontrestrictyourself.com',
            name: 'www.dontrestrictyourself.com',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'my-website.hbs',
            image: '3my-website.png',
            alt: 'www.jedboyle.com (old static site)',
            name: 'www.jedboyle.com (old static site)',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'tic-tac-toe.hbs',
            image: '1tic-tac-toe.jpg',
            alt: 'Tic Tac Toe Game',
            name: 'Tic Tac Toe Game',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'stopwatch.hbs',
            image: '1stopwatch.jpg',
            alt: 'Stopwatch App',
            name: 'Stopwatch App',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'css-poster.hbs',
            image: '2css-poster.jpg',
            alt: 'CSS Poster',
            name: 'CSS Poster',
            languages: 'HTML, CSS'
        }, {
            link: 'j-summerfield-ceramics-old.hbs',
            image: '13j-summerfield-ceramics-old.jpg',
            alt: 'www.jsummerfieldceramics.co.uk (old static site)',
            name: 'www.jsummerfieldceramics.co.uk (old static site)',
            languages: 'HTML, CSS, JS, Bootstrap'
        }
    ]
};

// Routes

app.get('/', (req, res) => res.render('index', context));
app.get('/resume', (req, res) => res.render('resume', context));
app.get('/portfolio', (req, res) => res.render('portfolio', context));
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


