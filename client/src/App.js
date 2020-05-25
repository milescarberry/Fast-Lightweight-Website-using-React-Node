import React from 'react';

import Feedback from './feedback.js' ;  //default import

import Home from './home.js' ;        //default import

import About from './about.js' ;      //default import

import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {

return (

<BrowserRouter>
<Route path="/" exact component={Home}/>
<Route path="/about" exact component={About}/>
<Route path="/feedback" exact component={Feedback}/>
</BrowserRouter>


) ;


} ;

export default App;
