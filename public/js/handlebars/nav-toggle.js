const context = {};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;
