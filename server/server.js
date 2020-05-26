const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()     // to access environment variables  (process.env)


// import routes


const feedbackRoutes = require('./routes/feedback.js');    /* this is like a 'package'. 
                                                              Like the above packages. */



                                                              
//app 


const app = express();          // express() is a request & response handler


// middlewares

app.use(morgan('dev'));     /* morgan print outs the API endpoint (client-side request) 
                               in the console. morgan passes the "dev" flag */


app.use(bodyParser.json());        // calling the json method



app.use(cors());



// routes


app.use('/api', feedbackRoutes);         // modularizing the code

/* Any request made to the above endpoint will be passed on to feedbackRoutes package. */


//port


const port = process.env.PORT || 8000;   // assigning port to server side package


app.listen(port, () => { console.log(`The server is running on port: ${port}`) });  // using callback function & template string here



