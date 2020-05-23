const express = require('express');

const router = express.Router();   // So, Router() is contained in the express package.

const{emailFeedback} = require('../controllers/feedback.js') ;   // emailFeedback is a function


router.post('/feedback', emailFeedback );   // Modularization (Simplification) 

// The arrow callback function is contained inside emailFeedback function.


module.exports = router;   /*// each module (each nodejs file) has by default an exports object.
                                 // The exports object is by default empty. */
