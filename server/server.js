const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()     // to access environment variables


//app

const app = express();          // express() is a request & response handler


// middlewares

app.use(morgan('dev'));     // morgan print outs the API endpoint (client-side request) 
                           // in the console. morgan passes the "dev" flag


app.use(bodyParser.json());        // calling the json method



app.use(cors());



// routes

app.get('/api',(req,res)=>{            // Creating An Endpoint


res.json({                            // Calling the json method

data: 'You Have Hit The API!'         // created an object here to store the responses

}) ;




}) ;
