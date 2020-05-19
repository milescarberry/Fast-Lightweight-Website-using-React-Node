import React, { useState } from 'react';


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



        setValues({ ...values, [name]: event.target.value });


    };



    // "Submit" Event Handler


    const handleSubmit = (event) => {

        event.preventDefault();                     //will prevent loading of the browser 
        //when hitting the "submit" button


        setValues({ ...values, buttonText: '...sending' });     // Change button text to '... sending'


        // send all state data to backend for email to the administrator

        console.table({ name, email, message, phone, uploadedFiles });



    };



    const uploadWidget = () => {
        cloudinary.openUploadWidget({ cloud_name: REACT_APP_API_CLOUDINARY_CLOUD_NAME, upload_preset: REACT_APP_API_CLOUDINARY_UPLOAD_SECRET, tags: ['ebooks'] },
            function (error, result) {
                console.log(result);
            });
    }


    const feedbackForm = () => (


        <React.Fragment>

            <div className="form-group pt-5">

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


                <button className="btn btn-outline-primary btn-block">{buttonText}</button>





            </form>


        </React.Fragment>





    );


    /* The return value for function Feedback() */


    return (

        <div className="p-5">

            {feedbackForm()}

        </div>


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