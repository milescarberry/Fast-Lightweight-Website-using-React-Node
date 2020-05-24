
const sgMail = require('@sendgrid/mail');   // importing @sendgrid/mail package

sgMail.setApiKey(process.env.SENDGRID_API_KEY);  // passing the api key to sgMail package using setApiKey() method




exports.emailFeedback = (req, res) => {



    //console.log(req.body);


    //Destructuring req.body

    const { name, email, phone, message, uploadedFiles } = req.body;

    const emailData = {

        to: process.env.EMAIL_TO,

        from: email,

        subject: 'Feedback Form',

        html: `

<h1>Customer Feedback Form</h1>

<hr />

<h2>Sender Name: ${name}</h2>
<h2>Sender Name: ${email}</h2>
<h2>Sender Name: ${phone}</h2>
<h2>Sender Name: ${message}</h2>

<br />
${uploadedFiles.map((element) => { return (`<img src="${element.secure_url}" alt="${element.original_filename}" style="width:50%;overflow:hidden;padding:50px;"/>`); })}

<hr />

<p>https://localfirm.com/</p>

`



    };



    sgMail.send(emailData)

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


