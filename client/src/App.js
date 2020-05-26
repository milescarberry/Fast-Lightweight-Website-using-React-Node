import React from 'react';

import Feedback from './feedback.js';  //default import

import Home from './home.js';        //default import

import About from './about.js';      //default import

import Track from './track.js';    //default import

import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {

    return (

        <BrowserRouter>

            <Route path="/" exact component={Home} />

            <Route path="/about" exact component={About} />

            <Route path="/feedback" exact component={Feedback} />

            <Route path="/track" exact component={Track} />

        </BrowserRouter>


    );  // BrowserRouter wraps all the components & assigns paths to them using "Route".


};

export default App;
