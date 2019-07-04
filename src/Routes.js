import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home'
import About from './About/About';
import Tools from './Tools/Tools';
import Works from './Works/Works'
import Contact from "./Contact/Contact";

const Routes = () => {
    return (
        <Switch>iv 
           <Route exact path="/" component={Home} />
           <Route exact path="test1" component={About} />
           <Route exact path="test2" component={Tools} />
           <Route exact path="test3" component={Works} />
           <Route exact path="test4" component={Contact} />
        </Switch>
    )
}

export default Routes;




