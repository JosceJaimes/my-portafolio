import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom'
import './App.css';
import Navigation from './Const/Navigation'
import * as routes from './Const/Routes'
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
 
const Natbar = () =>
<Router>
  <div>
    <Navigation />
    <Route exact path={routes.ABOUT}
    component={About}/>

    <Route exact path={routes.CONTACT}
    component={Contact}/>

    <Route exact path={routes.WORKS}
    component={Works}/>
  </div>
</Router>


 
export default Natbar;