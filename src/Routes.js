import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About';
import Tools from './Tools/Tools';
import Works from './Works/Works'
import Contact from "./Contact/Contact";

const Routes = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}> 
        <Switch> 
           <Route exact path="/" component={Home} />
           <Route exact path="test1" component={About} />
           <Route exact path="test2" component={Tools} />
           <Route exact path="test3" component={Works} />
           <Route exact path="test4" component={Contact} />
        </Switch>
        </Router>
    )
}

export default Routes;




