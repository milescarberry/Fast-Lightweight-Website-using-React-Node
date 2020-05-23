
const sgMail = require('@sendgrid/mail');   // importing @sendgrid/mail package

sgMail.setApiKey(process.env.SENDGRID_API_KEY);  // passing the api key to sgMail package using setApiKey() method




exports.emailFeedback = (req, res) => {



    //console.log(req.body);


//Destructuring req.body

    const {name,email,phone,message,uploadedFiles} = req.body ;

    const emailData = {

to: process.env.EMAIL_TO,

from: email,

subject: 'Feedback Form',

html: `







`



    } ; 


};


