import React, { useState } from 'react';


const Feedback = () => {          // Feedback Function

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


    // Event Handler


    const handleChange = () => {



        console.log("Handle Change");


    };



    // Function 


    const handleSubmit = () => {



        console.log("Handle Submit");






    };



    const feedbackForm = () => (


        <React.Fragment>


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

                    <label className="text-muted">Your Email</label>

                    <input className="form-control" onChange={handleChange('email')} type="email" value={email} required />


                </div>


                <div className="form-group">

                    <label className="text-muted">Your Phone Number</label>

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