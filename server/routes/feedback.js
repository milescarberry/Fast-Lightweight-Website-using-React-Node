
const express = require('express');



const router = express.Router();   // So, Router() is contained inside the express package.



const{emailFeedback} = require('../controllers/feedback.js') ;   // emailFeedback is a function


const{trackId} = require('../controllers/track.js') ;



router.post('/feedback', emailFeedback );   // Modularization (Simplification) 


// The arrow callback function is contained inside emailFeedback function.


router.post('/track', trackId );



module.exports = router;   /* Each module (each nodejs file) has by default an exports object.
                              The exports object is by default empty. */
