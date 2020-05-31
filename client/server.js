//import packages

const express = require('express');              // import express package

const compression = require('compression');    // import compression package

const path = require('path');                 // import path package


// app creation

const app = express();            // call the express() method



//middlewares

app.use(compression());


app.use(express.static(path.join(__dirname, 'build')));


//routes

app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname, 'build', 'index.html'));

});


//port

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(`App is running on port ${PORT}`);

});