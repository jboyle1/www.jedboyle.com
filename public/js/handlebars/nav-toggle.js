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
        }, 
    ]
};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;