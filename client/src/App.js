import React from 'react';

import Feedback from './feedback.js' ;

import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {

return (

<BrowserRouter>
<Route path="/feedback" exec component={Feedback}/>
</BrowserRouter>


) ;


} ;

export default App;
