import React from 'react';

import { Link } from 'react-router-dom';    // for smooth navigation & 
                                           // a single-page application feel


const Layout = ({ children }) => (    //{children} :- Destructuring "props" here 
                                     // avoiding [props.children] (we directly destructured props)

    <React.Fragment>

        <nav>

            <ul className="nav nav-tabs">     

                <li className="nav-item p-3">

                    <Link to="/">Home</Link>

                </li>
                <li className="nav-item p-3">

                    <Link to="/about">About</Link>

                </li>

                <li className="nav-item p-3">

                    <Link to="/feedback">Feedback</Link>

                </li>

                <li className="nav-item p-3">

                    <Link to="/track">Track</Link>

                </li>

            </ul>

        </nav>

        <div className="container">{children}</div>

    </React.Fragment>




);                              // Home, Feedback & About are part of {children}.
                               // Home, Feedback & About are part of the same *layout*.


export default Layout;        // default exporting Layout({children}) function
