
const sgMail = require('@sendgrid/mail');   // importing @sendgrid/mail package

const nodemailer = require("nodemailer");   // importing nodemailer package


sgMail.setApiKey(process.env.SENDGRID_API_KEY);  // passing the api key to sgMail package using setApiKey() method


require('dotenv').config()     // to access environment variables  (process.env)







// nodemailer configuration



const transporter = nodemailer.createTransport({

    host: process.env.HOST,

    port: process.env.ETHEREAL_PORT,

    auth: {

        user: process.env.USER,

        pass: process.env.PASS

    }


});








exports.emailFeedback = (req, res) => {



    //console.log(req.body);


    //Destructuring req.body

    const { name, email, phone, subject, message, uploadedFiles } = req.body;

    const emailData = {

        to: process.env.EMAIL_TO,

        from: email,

        subject: 'Feedback Form',

        html: `

<h1>Customer Feedback Form</h1>

<hr />

<h2>Sender's Name: ${name}</h2>
<h2>Email Id: ${email}</h2>
<h2>Phone Number: ${phone}</h2>
<h2>Subject: ${subject}</h2>
<h2>Message: ${message}</h2>

<br />
${uploadedFiles.map((element) => { return (`<img src="${element.secure_url}" alt="${element.original_filename}" style="width:50%;overflow:hidden;padding:50px;"/>`); })}

<hr />

<p>https://localfirm.com/</p>

`



    };




// send mail with defined transport object




    transporter.sendMail(emailData)

    .then(sent => {

        console.log(sent);

        return (res.json({

            success: true                    // to handle the success message in the react client side. 

        }));


    })

    .catch(err => {             // catch any error while sending the email

        console.log(err);

        return (res.json({

            success: false

        }));


    })
    


};









    // sgMail.send(emailData)

    //     .then(sent => {

    //         console.log(sent);

        //     return (res.json({

        //         success: true                    // to handle the success message in the react client side. 

        //     }));


        // })

        // .catch(err => {             // catch any error while sending the email

        //     console.log(err);

        //     return (res.json({

        //         success: false

        //     }));


        // })