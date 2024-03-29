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
app.use(express.static(path.join(__dirname, 'public/img/language-icons')));

// Image middleware
app.use(express.static(path.join(__dirname, 'public/img/factory-pattern')));
app.use(express.static(path.join(__dirname, 'public/img/user-validation')));
app.use(express.static(path.join(__dirname, 'public/img/pizza-fanatic')));
app.use(express.static(path.join(__dirname, 'public/img/pibot')));
app.use(express.static(path.join(__dirname, 'public/img/gazetteer')));
app.use(express.static(path.join(__dirname, 'public/img/cic')));
app.use(express.static(path.join(__dirname, 'public/img/wasteman')));
app.use(express.static(path.join(__dirname, 'public/img/paddy-pers')));
app.use(express.static(path.join(__dirname, 'public/img/paddy-com')));
app.use(express.static(path.join(__dirname, 'public/img/git-hub-profile-finder')));
app.use(express.static(path.join(__dirname, 'public/img/ajax-api-crud-operations')));
app.use(express.static(path.join(__dirname, 'public/img/geolocation')));
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
app.use(express.static(path.join(__dirname, 'public/img/jackie-ceramics')));
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
app.use(express.static(path.join(__dirname, 'public/img/trivia-card')));


// Javasctipt middleware
app.use(express.static(path.join(__dirname, 'public/js/handlebars')));
app.use(express.static(path.join(__dirname, 'public/js/git-hub-info')));
app.use(express.static(path.join(__dirname, 'public/js/email-js')));
app.use(express.static(path.join(__dirname, 'public/js/pdfs')));


// Create default template layout called main and place in a folder called
// 'layouts' also inside 'views'.
app.engine('.hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

// Portfolio dropdown

const context = {
        toggleNav: [{
            name: 'PHP Factory Pattern',
            link: 'factory-pattern',
            topic: 'PHP/OOP/Design Patterns'
        },{
            name: 'User validation form',
            link: 'user-validation',
            topic: 'PHP/OOP/HTML'
        },{
            name: 'Pizza Fanatic App',
            link: 'pizza-fanatic',
            topic: 'PHP/MySQL'
        },
        {
            name: 'Raspberry Pi Robot',
            link: 'pibot',
            topic: 'RaspberryPi/Python'
        },
        {
            name: 'Commercial in Confidence',
            link: 'cic',
            topic: 'MySQL/PHP/AJAX'
        },
        {
            name: 'Gazetteer Geolocation',
            link: 'gazetteer',
            topic: 'APIs/cURL/PHP/AJAX'
        },
        {
            name: 'Wasteman Clearance',
            link: 'wasteman',
            topic: 'Bootstrap/JS'
        },
        {
            name: 'Paddy Boyle Photos',
            link: 'paddy-pers',
            topic: 'Node.js'
        },
        {
            name: 'Paddy Boyle Photography',
            link: 'paddy-com',
            topic: 'Node.js'
        },
        {
            name: 'Jackie Ceramics Site',
            link: 'jackie-ceramics',
            topic: 'Bootstrap'
        },
        {
            name: 'My Website',
            link: 'my-website-new',
            topic: 'Node.js/Express/HBS'
        },
        {
            name: 'Phoenix Beading Site',
            link: 'phoenix-beading',
            topic: 'Bootstrap'
        },
        {
            name: 'Neighbourhood Site',
            link: 'nfc',
            topic: 'Bootstrap'
        },
        {
            name: 'GitHub Profiler API',
            link: 'git-hub-profile-finder',
            topic: 'AJAX/jQuery'
        },
        {
            name: 'AJAX CRUD Requests',
            link: 'ajax-api',
            topic: 'AJAX/jQuery/Node.js'
        },
        {
            name: 'Geolocation App/API',
            link: 'geolocation',
            topic: 'AJAX/PHP/CURL/JSON'
        },
        {
            name: 'Json Generator App',
            link: 'json-generator',
            topic: 'AJAX'
        }, {
            name: 'Musicon Site',
            link: 'musicon',
            topic: 'Handlebars'
        }, {
            name: 'Rock Paper Scissors App',
            link: 'rock-paper-scissors',
            topic: 'JS'
        }, {
            name: 'PHP Calculator App',
            link: 'php-calc',
            topic: 'PHP'
        }, {
            name: 'Race Registration App',
            link: 'race-day',
            topic: 'JS'
        }, {
            name: 'Magic Eight Ball App',
            link: 'magic-eight-ball',
            topic: 'JS'
        }, {
            name: 'Games of Chance App',
            link: 'games-of-chance',
            topic: 'JS'
        }, {
            name: 'Tasty Treats Form',
            link: 'tasty-treats',
            topic: 'Node.js'
        }, {
            name: 'React Exercise',
            link: 'react-exercise',
            topic: 'Node.js/React'
        }, {
            name: 'Bitesize API',
            link: 'bitesize',
            topic: 'AJAX'
        }, {
            name: 'Wordsmith API',
            link: 'wordsmith',
            topic: 'AJAX'
        }, {
            name: 'Piano Keys App',
            link: 'piano',
            topic: 'jQuery'
        }, {
            name: 'Gameboard App',
            link: 'gameboard',
            topic: 'jQuery'
        }, {
            name: 'Web Safe Font App',
            link: 'web-safe-fonts',
            topic: 'jQuery'
        }, {
            name: 'Feedster App',
            link: 'feedster',
            topic: 'PHP'
        }, {
            name: 'Madison Site',
            link: 'madison-square-market',
            topic: 'jQuery'
        }, {
            name: 'Task List',
            link: 'task-list',
            topic: 'Python/Flask'
        }, {
            name: 'Trivia Card',
            link: 'trivia-card',
            topic: 'jQuery'
        }, {
            name: 'Academia Stats',
            link: 'academia-stats',
            topic: 'DC.js/Crossfilter'
        }, {
            name: 'Connect Four Game',
            link: 'connect-four',
            topic: 'jQuery'
        }, {
            name: 'DRY App',
            link: 'dry',
            topic: 'Bootstrap'
        }, {
            name: 'Silent Signs',
            link: 'ss.hbs',
            topic: 'JS/Bootstrap'
        }, {
            name: 'Tic Tac Toe Game',
            link: 'tic-tac-toe',
            topic: 'JS'
        }, {
            name: 'Stopwatch App',
            link: 'test-stopwatch',
            topic: 'JS'
        }, {
            name: 'CSS Poster',
            link: 'css-poster',
            topic: 'HTML5/CSS3'
        }
    ],
    workHistory: [{
        dates: '02/2021 - Present',
        link: 'http://www.enable.ltd.uk/',
        image: 'enable.png',
        alt: 'Employment Administration Services',
        name: 'Enable Ltd',
        inst: 'Web developer',
        info: 'Employment Administration Services'
    },{
        dates: '01/2020 - 01/2021',
        link: 'https://itcareerswitch.co.uk/coding-traineeship/',
        image: 'itcs2.png',
        alt: 'IT Career Switch, Full Stack Coding Bootcamp',
        name: 'IT Career Switch',
        inst: 'Accredited Training Course',
        info: 'Full Stack Coding Bootcamp'
    }, {
        dates: '01/2019 - 01/2020',
        link: 'https://codeinstitute.net/',
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
    }],
    portfolio: [{
            link: 'factory-pattern',
            image: 'factory-pattern1.png',
            alt: 'PHP Design Patterns - Factory Pattern',
            name: 'PHP Design Patterns - Factory Pattern',
            // languages: 'MySQL, PHP'
        },{
            link: 'user-validation',
            image: 'user-validation1.png',
            alt: 'User Validation Form',
            name: 'User Validation Form',
            // languages: 'MySQL, PHP'
        },{
            link: 'pizza-fanatic',
            image: 'pizza-fanatic1.png',
            alt: 'Pizza Order App ',
            name: 'Pizza Order App',
            // languages: 'MySQL, PHP'
        },{
            link: 'pibot',
            image: 'pibot5.png',
            alt: 'Raspberry Pi Remote Controlled Robot',
            name: 'Raspberry Pi Remote Controlled Robot',
            // languages: 'MySQL, PHP, AJAX, jQuery'
        }, {
            link: 'cic',
            image: '1cic.png',
            alt: 'Employee Directory',
            name: 'Commercial in Confidence App',
            // languages: 'MySQL, PHP, AJAX, jQuery'
        },
        {
            link: 'gazetteer',
            image: 'new.png',
            alt: 'Geolocation App',
            name: 'Gazetteer Geolocation App',
            // languages: 'API, cURL, PHP, AJAX, jQuery'
        },
        {
            link: 'wasteman',
            image: '1z.png',
            alt: 'Wasteman Clearance',
            name: 'www.wastemanclearance.co.uk',
            // languages: 'HTML, CSS, JS, Bootstrap'
        },
        {
            link: 'paddy-pers',
            image: '1O.png',
            alt: 'Paddy Boyle photos',
            name: 'www.pboylephotograhpy.co.uk',
            // languages: 'HTML, CSS, Node.js, Express, Handlebars'
        },
        {
            link: 'paddy-com',
            image: '1N.png',
            alt: 'Paddy Boyle photography',
            name: 'www.pboylephotos.co.uk',
            // languages: 'HTML, CSS, Node.js, Express, Handlebars'
        },
        {
            link: 'jackie-ceramics',
            image: '1j-summerfield-ceramics.png',
            alt: 'www.jsummerfieldceramics.co.uk',
            name: 'www.jsummerfieldceramics.co.uk',
            // languages: 'HTML, CSS, JS, Bootstrap'
        },
        {
            link: 'my-website-new',
            image: '3my-website-new.png',
            alt: 'www.jedboyle.com',
            name: 'www.jedboyle.com',
            // languages: 'HTML, CSS, Node.js, Express, Handlebars'
        },
        {
            link: 'phoenix-beading',
            image: '1phoenix-beading.png',
            alt: 'www.phoenixbeading.co.uk',
            name: 'www.phoenixbeading.co.uk',
            // languages: 'HTML, CSS, JS, Bootstrap'
        },
        {
            link: 'nfc',
            image: '1neighbourhood-for-change.jpg',
            alt: 'www.neighbourhoodforchange.co.uk',
            name: 'www.neighbourhoodforchange.co.uk',
            // languages: 'HTML, CSS, JS, Bootstrap'
        },
        {
            link: 'git-hub-profile-finder',
            image: '1git-hub-profile-finder.png',
            alt: 'GitHub Profile finder API',
            name: 'GitHub Profile finder API',
            languages: 'AJAX, API, jQuery'
        },
        {
            link: 'ajax-api',
            image: '1ajax-api.png',
            alt: 'AJAX CRUD Requests',
            name: 'AJAX CRUD Requests',
            languages: 'AJAX. API, jQuery, Node.js'
        },
        {
            link: 'geolocation',
            image: '1geolocation.png',
            alt: 'Geolocation App',
            name: 'Geolocation App',
            languages: 'AJAX. API, PHP, CURL, JSON'
        },
        {
            link: 'json-generator',
            image: '1json-generator.png',
            alt: 'JSON Generator App with API',
            name: 'JSON Generator App with API',
            languages: 'HTML, CSS, JS, AJAX'
        }, {
            link: 'musicon',
            image: 'musicon-001.png',
            alt: 'musicon',
            name: 'Musicon',
            languages: 'HTML, CSS, JS, Handlebars'
        }, {
            link: 'rock-paper-scissors',
            image: 'rps-001.png',
            alt: 'rock paper scissors Game',
            name: 'Rock Paper Scissors Game',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'php-calculator',
            image: '1php-calc.png',
            alt: 'PHP Calculator App',
            name: 'PHP Calculator App',
            languages: 'HTML, CSS, PHP'
        }, {
            link: 'race-day',
            image: '1race-day.png',
            alt: 'Race Day Registration App',
            name: 'Race Day Registration App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'magic-eight-ball',
            image: '1magic-eight-ball.png',
            alt: 'Magic Eight Ball App',
            name: 'Magic Eight Ball App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'games-of-chance',
            image: '1games-of-chance.png',
            alt: 'Games of Chance App',
            name: 'Games of Chance App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'tasty-treats',
            image: '1tasty-treats.jpg',
            alt: 'Tasty Treats Form',
            name: 'Tasty Treats Form',
            languages: 'HTML, CSS, Node.js'
        }, {
            link: 'react-exercise',
            image: '1react-exercise.png',
            alt: 'React Exercise',
            name: 'React Exercise',
            languages: 'HTML, CSS, Node.js, React.js'
        }, {
            link: 'bitesize',
            image: '1bitesize.png',
            alt: 'Bitesize App with API',
            name: 'Bitesize App with API',
            languages: 'HTML, CSS, JS, AJAX'
        }, {
            link: 'wordsmith',
            image: '1wordsmith.png',
            alt: 'Wordsmith App with API',
            name: 'Wordsmith App with API',
            languages: 'HTML, CSS, JS, AJAX'
        }, {
            link: 'piano-keys',
            image: '1piano-keys.png',
            alt: 'Piano Keys App',
            name: 'Piano Keys App',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'gameboard',
            image: '1gameboard.png',
            alt: 'Gameboard App',
            name: 'Gameboard App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'web-safe-fonts',
            image: '1web-safe-fonts.png',
            alt: 'Web Safe Font Preview App',
            name: 'Web Safe Font Preview App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'feedster',
            image: '1feedster.png',
            alt: 'Feedster App',
            name: 'Feedster App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'madison-square-market',
            image: '1madison.png',
            alt: 'Madison Square Market App',
            name: 'Madison Square Market App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'task-list',
            image: '3task-list.png',
            alt: 'Task List App',
            name: 'Task List App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'trivia-card',
            image: '1trivia-card.png',
            alt: 'Trivia Card App',
            name: 'Trivia Card App',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'gender-in-academia',
            image: '1gender-in-academia.png',
            alt: 'www.genderinacademia.co.uk',
            name: 'www.genderinacademia.co.uk',
            languages: 'HTML, CSS, DC.js, Crossfilter'
        }, {
            link: 'connect-four',
            image: '4connect-four.jpg',
            alt: 'Connect Four Game',
            name: 'Connect Four Game',
            languages: 'HTML, CSS, JQuery'
        }, {
            link: 'dry',
            image: '11dont-restrict-yourself.jpg',
            alt: 'www.dontrestrictyourself.com',
            name: 'www.dontrestrictyourself.com',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'tic-tac-toe',
            image: '1tic-tac-toe.jpg',
            alt: 'Tic Tac Toe Game',
            name: 'Tic Tac Toe Game',
            languages: 'HTML, CSS, JS'
        }, {
            link: 'stopwatch',
            image: '1stopwatch.jpg',
            alt: 'Stopwatch App',
            name: 'Stopwatch App',
            languages: 'HTML, CSS, JS, Bootstrap'
        }, {
            link: 'css-poster',
            image: '2css-poster.jpg',
            alt: 'CSS Poster',
            name: 'CSS Poster',
            languages: 'HTML, CSS'
        }
    ],
    factoryPattern: [{
        name: 'PHP Design Patterns - Factory Pattern',
        link: 'https://php-design-patterns-001-factor.herokuapp.com/',
        alt: 'https://php-design-patterns-001-factor.herokuapp.com/',
        img1: 'factory-pattern1.png',
        img2: 'factory-pattern2.png',
        img3: 'factory-pattern3.png',
        iconImg1: 'XAMPP.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'php.png',
        iconImg5: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/php-design-patterns-001-factory-pattern'
    }],
    userValidation: [{
        name: 'User Validation Form',
        link: 'https://user-validation-form.herokuapp.com/',
        alt: 'https://user-validation-form.herokuapp.com/',
        img1: 'user-validation1.png',
        img2: 'user-validation2.png',
        img3: 'user-validation3.png',
        iconImg1: 'XAMPP.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'php.png',
        iconImg5: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/user-validation-form'
    }],
    pizzaFanatic: [{
        name: 'Pizza Fanatic - Pizza Order App',
        link: 'https://pizza-fanatic-app.herokuapp.com/',
        alt: 'https://pizza-fanatic-app.herokuapp.com/',
        img1: 'pizza-fanatic1.png',
        img2: 'pizza-fanatic2.png',
        img3: 'pizza-fanatic3.png',
        img4: 'pizza-fanatic4.png',
        iconImg1: 'XAMPP.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'php.png',
        iconImg5: 'mysql.png',
        iconImg6: 'sequelpro.jpg',
        iconImg7: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/pizza-fanatic'
    }],
    pibot: [{
        name: 'Raspberry Pi Remote Controlled Robot',
        link: 'https://commercial-in-confidence-app.herokuapp.com/',
        alt: 'https://commercial-in-confidence-app.herokuapp.com/',
        img1: 'pibot1.png',
        img2: 'pibot2.png',
        img3: 'pibot3.png',
        img4: 'pibot4.png',
        img5: 'pibot5.png',
        img6: 'pibot6.png',
        img7: 'pibot7.png',
        iconImg1: 'Raspi_Colour_R.png',
        iconImg2: 'circuitpython.png',
        iconImg3: 'Python.png',
        iconImg4: 'mosquitto-logo.png',
        iconImg5: 'MQTT_Icon.png',
        iconImg6: 'xcode-icon.png',
        gitHub: 'https://github.com/gallaugher/PiBot'
    }],
    cic: [{
        name: 'Commercial in Confidence',
        link: 'https://commercial-in-confidence-app.herokuapp.com/',
        alt: 'https://commercial-in-confidence-app.herokuapp.com/',
        img1: '1cic.png',
        img2: '2cic.png',
        img3: '3cic.png',
        img4: '6cic.png',
        img5: '5cic.png',
        img6: '4cic.png',
        img7: '9cic.png',
        img8: '8cic.png',
        img9: '7cic.png',
        iconImg1: 'XAMPP.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'javascript.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'jquery.png',
        iconImg7: 'ajax.png',
        iconImg8: 'php.png',
        iconImg9: 'mysql.png',
        iconImg10: 'sequelpro.jpg',
        iconImg11: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/commercial-in-confidence-app'
    }],
    gazetteer: [{
        name: 'Gazeteer Geolocation App',
        link: 'https://gazetteer-geolocation-app.herokuapp.com/',
        alt: 'https://gazetteer-geolocation-app.herokuapp.com/',
        img1: 'new.png',
        img2: '1M.png',
        img3: '2M.png',
        img4: '3M.png',
        img5: '4M.png',
        iconImg1: 'XAMPP.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'javascript.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'jquery.png',
        iconImg7: 'ajax.png',
        iconImg8: 'php.png',
        iconImg9: 'curl.png',
        iconImg10: 'leaflet.png',
        iconImg11: 'open-weather.png',
        iconImg12: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/gazetteer-app'
    }],
    wasteman: [{
        name: 'www.wastemanclearance.co.uk ',
        link: 'http://www.wastemanclearance.co.uk/',
        alt: 'http://www.wastemanclearance.co.uk/',
        img1: '1z.png',
        img2: '2z.png',
        img3: '3z.png',
        img4: '4z.png',
        img5: '5z.png',
        img6: '6z.png',
        img7: '7z.png',
        iconImg1: 'html-5.png',
        iconImg2: 'css.png',
        iconImg3: 'javascript.png',
        iconImg4: 'bootstrap.png',
        iconImg5: 'PRS-Fasthosts.png',
        gitHub: 'https://github.com/jboyle1/wasteman-clearance'
    }],
    paddyPers: [{
        name: 'www.pboylephotos.co.uk',
        link: 'http://www.pboylephotos.co.uk/',
        alt: 'http://www.pboylephotos.co.uk/',
        img1: '1O.png',
        img2: '2O.png',
        img3: '3O.png',
        img4: '4O.png',
        iconImg1: 'node.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'javascript.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'ex.png',
        iconImg7: 'hbs.png',
        iconImg8: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/paddy-boyle-photography-personal'
    }],
    paddyCom: [{
        name: 'www.pboylephotography.co.uk',
        link: 'http://www.pboylephotography.co.uk/',
        alt: 'http://www.pboylephotography.co.uk/',
        img1: '1N.png',
        img2: '2N.png',
        img3: '3N.png',
        img4: '4N.png',
        iconImg1: 'node.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'javascript.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'ex.png',
        iconImg7: 'hbs.png',
        iconImg8: 'heroku.png',
        gitHub: 'https://github.com/jboyle1/paddy-boyle-photography-commercial'
    }],
    jackieCeramics: [{
        name: 'www.jsummerfieldceramics.co.uk',
        link: 'https://www.jsummerfieldceramics.co.uk/',
        alt: 'https://www.jsummerfieldceramics.co.uk/',
        img1: '1j-summerfield-ceramics.png',
        img2: '2j-summerfield-ceramics.png',
        img3: '3j-summerfield-ceramics.png',
        img4: '4j-summerfield-ceramics.png',
        img5: '5j-summerfield-ceramics.png',
        iconImg1: 'html-5.png',
        iconImg2: 'css.png',
        iconImg3: 'javascript.png',
        iconImg4: 'snipcart.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'PRS-Fasthosts.png',
        gitHub: 'https://github.com/jboyle1/www.jsummerfieldceramics.co.uk'
    }],
    myWebsiteNew: [{
        name: 'www.jedboyle.com',
        link: 'https://www.jedboyle.com/',
        alt: 'https://www.jedboyle.com/',
        img1: '1my-website-new.png',
        img2: '2my-website-new.png',
        img3: '3my-website-new.png',
        iconImg1: 'node.png',
        iconImg2: 'html-5.png',
        iconImg3: 'css.png',
        iconImg4: 'javascript.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'ex.png',
        iconImg7: 'hbs.png',
        iconImg8: 'heroku.png',
        uiDesign: 'my-ux',
        gitHub: 'https://github.com/jboyle1/www.neighbourhoodforchange.com'
    }],
    phoenixBeading: [{
        name: 'Phoenix Beading Site',
        link: 'https://phoenixbeading.co.uk/',
        alt: 'https://phoenixbeading.co.uk/',
        img1: '1phoenix-beading.png',
        img2: '2phoenix-beading.png',
        img3: '3phoenix-beading.png',
        img4: '4phoenix-beading.png',
        iconImg1: 'html-5.png',
        iconImg2: 'css.png',
        iconImg3: 'javascript.png',
        iconImg4: 'snipcart.png',
        iconImg5: 'bootstrap.png',
        iconImg6: 'PRS-Fasthosts.png',
        gitHub: 'https://github.com/jboyle1/www.phoenixbeading.co.uk'
    }],
    nFC: [{
        name: 'www.neighbourhoodforchange.co.uk',
        link: 'https://jboyle1.github.io/www.neighbourhoodforchange.com/',
        alt: 'https://jboyle1.github.io/www.neighbourhoodforchange.com/',
        img1: '1neighbourhood-for-change.jpg',
        img2: '2neighbourhood-for-change.jpg',
        img3: '3neighbourhood-for-change.png',
        img9: '9neighbourhood-for-change.png',
        img10: '10neighbourhood-for-change.png',
        img11: '11neighbourhood-for-change.png',
        img12: '12neighbourhood-for-change.png',
        iconImg1: 'html-5.png',
        iconImg2: 'css.png',
        iconImg3: 'javascript.png',
        iconImg4: 'bootstrap.png',
        iconImg5: 'PRS-Fasthosts.png',
        gitHub: 'https://github.com/jboyle1/www.neighbourhoodforchange.com'
    }],
    gitHubProfileFinder: [{
        name: 'GitHub Profile Finder API',
        link: 'https://jboyle1.github.io/github-profile-finder/',
        alt: 'https://jboyle1.github.io/github-profile-finder/',
        img1: '1git-hub-profile-finder.png',
        img2: '2git-hub-profile-finder.png',
        img3: '3git-hub-profile-finder.png',
        gitHub: 'https://github.com/jboyle1/github-profile-finder'
    }],
    ajaxApi: [{
        name: 'AJAX CRUD Requests',
        link: 'https://ajax-api-crud-operations.herokuapp.com/',
        alt: 'https://ajax-api-crud-operations.herokuapp.com/',
        img1: '1ajax-api.png',
        img2: '2ajax-api.png',
        gitHub: 'https://github.com/jboyle1/AJAX-and-RESTful-API-that-uses-CRUD-RESTful-API-operations'
    }],
    geolocation: [{
        name: 'Geolocation App',
        link: 'https://geolocation-project.herokuapp.com/',
        alt: 'https://geolocation-project.herokuapp.com/',
        img1: '1geolocation.png',
        img2: '2geolocation.png',
        gitHub: 'https://github.com/jboyle1/geolocation-project'
    }],
    jsonGenerator: [{
        name: 'Json Generator App',
        link: 'https://jboyle1.github.io/json-Generator/',
        alt: 'https://jboyle1.github.io/json-Generator/',
        img1: '1json-generator.png',
        gitHub: 'https://github.com/jboyle1/json-Generator'
    }],
    musicon: [{
        name: 'Musicon Site',
        link: 'https://jboyle1.github.io/musicon-handlebars-project/index.html',
        alt: 'https://jboyle1.github.io/musicon-handlebars-project/index.html',
        img1: 'musicon-001.png',
        img2: 'musicon-002.png',
        img3: 'musicon-003.png',
        img4: 'musicon-004.png',
        gitHub: 'https://github.com/jboyle1/musicon-handlebars-project'
    }],
    rockPaperScissors: [{
        name: 'Rock Paper Scissors',
        link: 'https://jboyle1.github.io/rock-paper-scissors/',
        alt: 'https://jboyle1.github.io/rock-paper-scissors/',
        img1: 'rps-001.png',
        img2: 'rps-002.png',
        img3: 'rps-003.png',
        gitHub: 'https://github.com/jboyle1/rock-paper-scissors'
    }],
    phpCalculator: [{
        name: 'PHP Calculator App',
        link: 'https://php-calculator-001.herokuapp.com/',
        alt: 'https://php-calculator-001.herokuapp.com/',
        img1: '1php-calc.png',
        img2: '2php-calc.png',
        img3: '3php-calc.png',
        gitHub: 'https://github.com/jboyle1/php-calculator'
    }],
    raceDay: [{
        name: 'Race Day Registration App',
        link: 'https://jboyle1.github.io/race-day/',
        alt: 'https://jboyle1.github.io/race-day/',
        img1: '1race-day.png',
        img2: '2race-day.png',
        img3: '3race-day.png',
        gitHub: 'https://github.com/jboyle1/race-day'
    }],
    magicEightBall: [{
        name: 'Magic Eight Ball App',
        link: 'https://jboyle1.github.io/magic-eight-ball/',
        alt: 'https://jboyle1.github.io/magic-eight-ball/',
        img1: '1magic-eight-ball.png',
        img2: '2magic-eight-ball.png',
        img3: '3magic-eight-ball.png',
        gitHub: 'https://github.com/jboyle1/magic-eight-ball'
    }],
    gamesOfChance: [{
        name: 'Games of Chance App',
        link: 'https://jboyle1.github.io/games-of-chance-javascript/',
        alt: 'https://jboyle1.github.io/games-of-chance-javascript/',
        img1: '1games-of-chance.png',
        img2: '2games-of-chance.png',
        img3: '3games-of-chance.png',
        gitHub: 'https://github.com/jboyle1/games-of-chance-javascript'
    }],
    tastyTreats: [{
        name: 'Tasty Treats Form',
        link: 'https://apption-labs-tasty-treats.herokuapp.com/',
        alt: 'https://apption-labs-tasty-treats.herokuapp.com/',
        img1: '1tasty-treats.jpg',
        gitHub: 'https://github.com/jboyle1/apption-labs-tasty-treats'
    }],
    reactExercese: [{
        name: 'React Exercise',
        link: 'https://jboyle1.github.io/react-sateless-comp-inherit-stateful-comp/',
        alt: 'https://jboyle1.github.io/react-sateless-comp-inherit-stateful-comp/',
        img1: '1react-exercise.png',
        img2: '2react-exercise.png',
        gitHub: 'https://github.com/jboyle1/react-sateless-comp-inherit-stateful-comp'
    }],
    bitesizeApi: [{
        name: 'Bitesize App with API',
        link: 'https://jboyle1.github.io/bitesize-API/',
        alt: 'https://jboyle1.github.io/bitesize-API/',
        img1: '1bitesize.png',
        img2: '2bitesize.png',
        gitHub: 'https://github.com/jboyle1/bitesize-API'
    }],
    wordsmithApi: [{
        name: 'Wordsmith App with API',
        link: 'https://jboyle1.github.io/wordsmith-API/',
        alt: 'https://jboyle1.github.io/wordsmith-API/',
        img1: '1wordsmith.png',
        img2: '2wordsmith.png',
        gitHub: 'https://github.com/jboyle1/wordsmith-API'
    }],
    pianoKeys: [{
        name: 'Piano Keys App',
        link: 'https://jboyle1.github.io/piano-keys-js-project/',
        alt: 'https://jboyle1.github.io/piano-keys-js-project/',
        img1: '1piano-keys.png',
        gitHub: 'https://github.com/jboyle1/piano-keys-js-project'
    }],
    gameboard: [{
        name: 'Gameboard App',
        link: 'https://jboyle1.github.io/gameboard-jquery-project/',
        alt: 'https://jboyle1.github.io/gameboard-jquery-project/',
        img1: '1gameboard.png',
        gitHub: 'https://github.com/jboyle1/gameboard-jquery-project'
    }],
    webSafeFonts: [{
        name: 'Web safe Fonts App',
        link: 'https://jboyle1.github.io/web-safe-font-preview-jquery-project/',
        alt: 'https://jboyle1.github.io/web-safe-font-preview-jquery-project/',
        img1: '1web-safe-fonts.png',
        gitHub: 'https://github.com/jboyle1/web-safe-font-preview-jquery-project'
    }],
    feedster: [{
        name: 'Feedster App',
        link: 'https://jboyle1.github.io/feedster-jquery-project/',
        alt: 'https://jboyle1.github.io/feedster-jquery-project/',
        img1: '1feedster.png',
        gitHub: 'https://github.com/jboyle1/feedster-jquery-project'
    }],
    madisonSquareMarket: [{
        name: 'Madison Square Market App',
        link: 'https://jboyle1.github.io/madison-square-market-jquery-project/',
        alt: 'https://jboyle1.github.io/madison-square-market-jquery-project/',
        img1: '1madison.png',
        gitHub: 'https://github.com/jboyle1/madison-square-market-jquery-project'
    }],
    taskList: [{
        name: 'Task List App',
        link: 'https://task-list-python.herokuapp.com/',
        alt: 'https://task-list-python.herokuapp.com/',
        img1: '1task-list.png',
        img2: '2task-list.png',
        img3: '3task-list.png',
        gitHub: 'https://github.com/jboyle1/to-do-list-app'
    }],
    triviaCard: [{
        name: 'Trivia Card App',
        link: 'https://jboyle1.github.io/trivia-card-jquery-project/',
        alt: 'https://jboyle1.github.io/trivia-card-jquery-project/',
        img1: '1trivia-card.png',
        gitHub: 'https://github.com/jboyle1/trivia-card-jquery-project'
    }],
    genderInAcademia: [{
        name: 'www.genderinacademia.co.uk',
        link: 'https://jboyle1.github.io/www.genderinacademia.co.uk/',
        alt: 'https://jboyle1.github.io/www.genderinacademia.co.uk/',
        img1: '1gender-in-academia.png',
        img2: '2gender-in-academia.png',
        gitHub: 'https://github.com/jboyle1/www.genderinacademia.co.uk'
    }],
    connectFourGame: [{
        name: 'Connect Four Game',
        link: 'https://jboyle1.github.io/connect-four/',
        alt: 'https://jboyle1.github.io/connect-four/',
        img1: '4connect-four.jpg',
        img2: '3connect-four.jpg',
        img3: '1connect-four.jpg',
        img9: '1connect-four.jpg',
        gitHub: 'https://github.com/jboyle1/connect-four'
    }],
    dry: [{
        name: 'www.dontrestrictyourself.com',
        link: 'https://jboyle1.github.io/www.dontrestrictyourself.com/',
        alt: 'https://jboyle1.github.io/www.dontrestrictyourself.com/',
        img1: '1dont-restrict-yourself.jpg',
        img2: '2dont-restrict-yourself.jpg',
        img3: '3dont-restrict-yourself.jpg',
        img4: '4dont-restrict-yourself.jpg',
        img5: '5dont-restrict-yourself.jpg',
        img6: '6dont-restrict-yourself.jpg',
        img7: '7dont-restrict-yourself.jpg',
        img8: '8dont-restrict-yourself.jpg',
        img9: '9dont-restrict-yourself.jpg',
        img10: '10dont-restrict-yourself.jpg',
        img11: '11dont-restrict-yourself.jpg',
        uiDesign: 'dry-ux',
        gitHub: 'https://github.com/jboyle1/www.dontrestrictyourself.com'
    }],
    ticTactToe: [{
        name: 'Tic Tac Toe Game',
        link: 'https://jboyle1.github.io/tic-tac-toe/',
        alt: 'https://jboyle1.github.io/tic-tac-toe/',
        img1: '1connect-four.jpg',
        img2: '2connect-four.jpg',
        img3: '3connect-four.jpg',
        gitHub: 'https://github.com/jboyle1/tic-tac-toe'
    }],
    stopwatch: [{
        name: 'Stopwatch App',
        link: 'https://jboyle1.github.io/test-stopwatch/',
        alt: 'https://jboyle1.github.io/test-stopwatch/',
        img1: '1stopwatch.jpg',
        gitHub: 'https://github.com/jboyle1/test-stopwatch'
    }],
    cssPoster: [{
        name: 'CSS Poster',
        link: 'https://jboyle1.github.io/test-poster/',
        alt: 'https://jboyle1.github.io/test-poster/',
        img1: '1css-poster.jpg',
        img2: '2css-poster.jpg',
        gitHub: 'https://github.com/jboyle1/test-poster'
    }]
};

// Routes

app.get('/', (req, res) => res.render('index', context));
app.get('/resume', (req, res) => res.render('resume', context));
app.get('/portfolio', (req, res) => res.render('portfolio', context));
app.get('/git-hub', (req, res) => res.render('git-hub', context));
app.get('/contact', (req, res) => res.render('contact', context));

// Project routes
app.get('/factory-pattern', (req, res) => res.render('factory-pattern', context));
app.get('/user-validation', (req, res) => res.render('user-validation', context));
app.get('/pizza-fanatic', (req, res) => res.render('pizza-fanatic', context));
app.get('/pibot', (req, res) => res.render('pibot', context));
app.get('/cic', (req, res) => res.render('cic', context));
app.get('/gazetteer', (req, res) => res.render('gazetteer', context));
app.get('/wasteman', (req, res) => res.render('wasteman', context));
app.get('/paddy-pers', (req, res) => res.render('paddy-pers', context));
app.get('/paddy-com', (req, res) => res.render('paddy-com', context));
app.get('/git-hub-profile-finder', (req, res) => res.render('git-hub-profile-finder', context));
app.get('/ajax-api', (req, res) => res.render('ajax-api', context));
app.get('/geolocation', (req, res) => res.render('geolocation', context));
app.get('/my-website-new', (req, res) => res.render('my-website-new', context));
app.get('/json-generator', (req, res) => res.render('json-generator', context));
app.get('/musicon', (req, res) => res.render('musicon', context));
app.get('/rock-paper-scissors', (req, res) => res.render('rock-paper-scissors', context));
app.get('/php-calculator', (req, res) => res.render('php-calculator', context));
app.get('/race-day', (req, res) => res.render('race-day', context));
app.get('/magic-eight-ball', (req, res) => res.render('magic-eight-ball', context));
app.get('/games-of-chance', (req, res) => res.render('games-of-chance', context));
app.get('/tasty-treats', (req, res) => res.render('tasty-treats', context));
app.get('/react-exercise', (req, res) => res.render('react-exercise', context));
app.get('/bitesize', (req, res) => res.render('bitesize', context));
app.get('/wordsmith', (req, res) => res.render('wordsmith', context));
app.get('/piano-keys', (req, res) => res.render('piano-keys', context));
app.get('/gameboard', (req, res) => res.render('gameboard', context));
app.get('/web-safe-fonts', (req, res) => res.render('web-safe-fonts', context));
app.get('/feedster', (req, res) => res.render('feedster', context));
app.get('/madison-square-market', (req, res) => res.render('madison-square-market', context));
app.get('/task-list', (req, res) => res.render('task-list', context));
app.get('/trivia-card', (req, res) => res.render('trivia-card', context));
app.get('/phoenix-beading', (req, res) => res.render('phoenix-beading', context));
app.get('/jackie-ceramics', (req, res) => res.render('jackie-ceramics', context));
app.get('/paddy-boyle', (req, res) => res.render('paddy-boyle', context));
app.get('/gender-in-academia', (req, res) => res.render('gender-in-academia', context));
app.get('/nfc', (req, res) => res.render('nfc', context));
app.get('/connect-four', (req, res) => res.render('connect-four', context));
app.get('/dry', (req, res) => res.render('dry', context));
app.get('/tic-tac-toe', (req, res) => res.render('tic-tac-toe', context));
app.get('/stopwatch', (req, res) => res.render('stopwatch', context));
app.get('/css-poster', (req, res) => res.render('css-poster', context));


// Route for PDF viewer
app.get('/cv', function(req, res) {
    var filePath = "/public/pdfs/CURRICULUM-VITAE.pdf";
    fs.readFile(__dirname + filePath, function(err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/my-ux', function(req, res) {
    var filePath = "/public/pdfs/my-research.pdf";
    fs.readFile(__dirname + filePath, function(err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/dry-ux', function(req, res) {
    var filePath = "/public/pdfs/dry-research.pdf";
    fs.readFile(__dirname + filePath, function(err, data) {
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