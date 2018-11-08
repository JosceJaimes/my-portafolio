import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Navigation from './Const/Navigation'
import * as routes from './Const/Routes'
import Home from './Home/Home';
import Splash from './Splash/Splash';
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
 
const App = () =>
<Router>
  <div>
    <Navigation />
    <Route exact path={routes.HOME}
    Component={Home}/>

    <Route exact path={routes.SPLASH}
    component={Splash}/>

    <Route exact path={routes.ABOUT}
    component={About}/>

    <Route exact path={routes.CONTACT}
    component={Contact}/>

    <Route exact path={routes.WORKS}
    component={Works}/>
  </div>
</Router>


 
export default App;