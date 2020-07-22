// Require 'express'
const express = require('express');
// Place express module in a variable called 'app'.
const app = express();

// Require 'path'
const path = require('path');

// Create route to index.html
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'public', 'index.html'))
});

// To run the web server, create a variable called PORT that evaluates to a hosted port or a local port
const PORT = process.env.PORT || 5000;
// run express 'listen' on 'app' on 'PORT' with a callback function second parameter that console logs that the server is running on the specific port.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



