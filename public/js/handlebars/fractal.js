const handlebarsLayouts = require('handlebars-layouts’);
const instanceComponents = fractal.components.engine();
handlebarsLayouts.register(instanceComponents.handlebars);