import React, { useState } from 'react';

import Layout from './layout.js';

import { Helmet } from 'react-helmet';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';




const Track = () => {                   // Main Function Track()


    const [values, setValues] = useState({          // Object. Values are the state variables.
                                           // setValues is the method


        trackingNumber: "",


        buttonText: "Track",





    });


    // destructuring state variables


    const { trackingNumber,buttonText } = values;


    // destructuring environment (.env) variables


    const { REACT_APP_API, REACT_APP_API_CLOUDINARY_CLOUD_NAME, REACT_APP_API_CLOUDINARY_UPLOAD_SECRET } = process.env;


    //handleChange method


    const handleChange = name => event => {

        setValues({ ...values, [name]: event.target.value });  //[name] is dynamically changing

    };



    //handleSubmit Method


    const handleSubmit = (event) => {

        event.preventDefault();   // will prevent loading of browser when submitting

        setValues({ ...values, buttonText: '...tracking' });

        console.table({trackingNumber}) ;


    };



    //trackingPanel

    

    const trackingPanel = () => (

        <React.Fragment>

            <form onSubmit={handleSubmit}>


                <div className="form-group">

                    <label className="text-muted">Enter Tracking ID</label>

                    <input className="form-control" onChange={handleChange('trackingNumber')} type="text" value={trackingNumber} required />


                </div>

                <br />

                <button className="btn btn-outline-primary btn-block">{buttonText}</button>

                <br />
                <br />
                <br />



            </form>



        </React.Fragment>


    );


    return (

        <Layout>

            <ToastContainer />

            <div className="container text-center">

                <h1 className="p-5">Tracking Page</h1>

            </div>

            <div className="container col-md-8 offset-md-2">

                {trackingPanel()}

            </div>

        </Layout>

    );





};



export default Track;