import React, { useState } from 'react';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import Layout from './layout.js';




const Feedback = () => {          // Feedback Function (Main Function)

    const [values, setValues] = useState({

        name: "",

        email: "",                         /* 
    
                                        creating state variables here 
                                                 
                                        by creating an object. These state variables 
                                        
                                        are the values. *setValues* is the method name.
                                        
                                        */

        message: "",



        phone: "",

        uploadedFiles: [],

        buttonText: "Submit",


        uploadPhotosButtonText: "Upload Files Here",





    });







    /* Destructuring State Variables */

    const { name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText } = values;



    /* Destructuring .env (Environment) Variables */



    const { REACT_APP_API, REACT_APP_API_CLOUDINARY_CLOUD_NAME, REACT_APP_API_CLOUDINARY_UPLOAD_SECRET } = process.env;



    // "Change" Event Handler


    const handleChange = name => event => {             /* One Arrow Function is returing 
                                                           another arrow function */



        setValues({ ...values, [name]: event.target.value });      // [name] :- This is dynamically changing


    };



    // Change "Event" Handler (Exclusively For Phone)

    // const handlePhone = phone => event => {             /* One Arrow Function is returing 
    //                                                       another arrow function */

    //     let regexPhone = /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/;



    //     setValues({ ...values, phone: event.target.value });      // [name] :- This is dynamically changing


    //     if (regexPhone.test(phone)) {

    //         toast.success('Valid Phone Number.');

    //     }

    //     else {

    //         toast.error('Enter Correct Phone Number.');

    //     }

    // };


    // Change "Event" Handler (Exclusively For Email)



    // const handleEmail = email => event => {             /* One Arrow Function is returing 
    //                                                        another arrow function */

    //     let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;



    //     setValues({ ...values, email: event.target.value });      // [name] :- This is dynamically changing

    //     if (regexEmail.test(email)) {

    //         toast.success('Valid Email Id.');

    //     }



    //     else {

    //         toast.error('Enter Correct Email Id.');

    //     }

    // };



    // Change "Event" Handler (Exclusively For Message)




    // const handleMessage = message => event => {             /* One Arrow Function is returing 
    //                                                            another arrow function */





    //     setValues({ ...values, message: event.target.value });      // [name] :- This is dynamically changing

    //     if (message.length >= 10) {

    //         toast.success('✔');

    //     }

    //     else {

    //         toast.error('Message Length Should Be At Least 10 Characters!');

    //     }

    // };







    // "Submit" Event Handler


    const handleSubmit = (event) => {



        event.preventDefault();                     /*will prevent loading of the browser 
                                                      when hitting the "submit" button*/


        setValues({ ...values, buttonText: '...sending' });     // Change button text to '... sending'


        // send all state data to back-end for email to the administrator

        //console.table({ name, email, message, phone, uploadedFiles });

        axios({

            method: 'POST',

            url: `${REACT_APP_API}/feedback`,

            data: { name, email, message, phone, uploadedFiles }


        })


            // Get the response from the back-end

            .then(response => {

                //console.log("feedback submit response", response);

                if (response.data.success) {
                    toast.success('Thank You For Your Valuable Feedback!');

                }

                // Now, emptying state variables after success response


                setValues({ ...values, name: '', email: '', message: '', phone: '', buttonText: "Submitted", uploadedFiles: [], uploadPhotosButtonText: "Uploaded" });


            })

            .catch(error => {                     // catch any error with feedback submission

                //console.log('feedback submit error', error.response);

                if (error.response.data.error) {

                    toast.error('Failed To Send Feedback! Please Try Again.');
                }

            });


    };



    const uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_API_CLOUDINARY_CLOUD_NAME, upload_preset: REACT_APP_API_CLOUDINARY_UPLOAD_SECRET, tags: ['ebooks'] },
            function (error, result) {                 // the "result" variable is an array which stores the images
                //console.log(result);

                setValues({ ...values, uploadedFiles: result, uploadPhotosButtonText: `${result ? result.length : 0} Photos Uploaded` });   // using template string here

            });
    }


    const feedbackForm = () => (


        <React.Fragment>

            <div className="form-group">

                <button onClick={() => uploadWidget()} className="btn btn-outline-secondary btn-block p-5">{uploadPhotosButtonText}</button>

            </div>


            <form onSubmit={handleSubmit}>



                <div className="form-group">

                    <label className="text-muted">Description</label>

                    <textarea onChange={handleChange('message')} type="text" className="form-control" value={message} required></textarea>



                </div>

                <div className="form-group">

                    <label className="text-muted">Your Name</label>

                    <input className="form-control" onChange={handleChange('name')} type="text" value={name} required />


                </div>


                <div className="form-group">

                    <label className="text-muted">Email Address</label>

                    <input className="form-control" onChange={handleChange('email')} type="email" value={email} required />


                </div>


                <div className="form-group">

                    <label className="text-muted">Phone Number</label>

                    <input className="form-control" onChange={handleChange('phone')} type="number" value={phone} required />


                </div>

                <br />

                <button className="btn btn-outline-primary btn-block">{buttonText}</button>

                <br />
                <br />
                <br />

            </form>


        </React.Fragment>





    );


    /* The return value for function Feedback() */


    return (

        <Layout>

            <ToastContainer />

            <div className="container text-center">

                <h1 className="p-5">Feedback Page</h1>

            </div>

            <div className="container col-md-8 offset-md-2">

                {feedbackForm()}

            </div>

        </Layout>


    );


};




export default Feedback;







/* when you are creating an arrow function using curly braces, you will need

to include a return segment at the end. Whereas,there is no need to include a

return segment when using parentheses in an arrow function [Eg: ()] .

Small Example :


1. const func = () => {






  return (abcdef) ;


} ;

2. const funcTwo = () => (

{

// when creating an object use curly braces like this...



}



) ;

*/