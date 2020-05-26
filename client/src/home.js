import React from 'react';

import Layout from './layout.js';

import { Helmet } from 'react-helmet';


const Home = () => (

    <Layout>

        <Helmet>

            <title>ASN Digital Marketing</title>

            <meta name="description" content="Perfect For Small Businesses!"/>

        </Helmet>

        <div className="container text-center">

            <h1 className="p-5">Home</h1>

            <hr />

            <p className="lead">This is the homepage. Welcome to the homepage!</p>

        </div>

    </Layout>





);


export default Home;   // default exporting the Home() function.