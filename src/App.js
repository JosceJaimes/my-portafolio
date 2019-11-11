//  import React, {Component} from 'react';
//  import './App.css';
// //  import Natbar from './Natbar.js';
//  import About from './About/About.js';
//  import Works from './Works/Works.js';
//  import Contact from './Contact/Contact.js'
// //  import Navbare from './Navbar/Navbar';

//  class App extends Component{
//    render(){
//      return(
//        <div className="container">
//        <div className="header">
//        {/* <Navbare /> */}
//        </div>
//       <div className="body">
//         <About/>
//         <Works/>
//         <Contact/>
//        </div>
//        <div className="footer">
//        </div>
//        </div>
//     )
//    }
//  }
 
// export default App;

import React, {Component} from 'react';
import Routes from './Routes'
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import './App.css';
// import Navbare from './Navbar/Navbar'
// import Navigation from './Const/Navigation'
// import * as routes from './Const/Routes'
// import About from './About/About.js';
// import Contact from './Contact/Contact.js';
// import Works from './Works/Works.js';
// import Tools from './Herramientas/Herramientas.js'
 
// class Natbar extends Component{
//   render(){
//     return(
//       <Router basename={process.env.PUBLIC_URL}>
//         <div>    
//         <Navbare/>
//         <Switch> 
//           <Route exact path={routes.ABOUT} component={About}/>

//           <Route exact path={routes.CONTACT} component={Contact}/>

//           <Route exact path={routes.WORKS} component={Works}/>

//           <Route exact path={routes.TOOLS} component={Tools}/>
//         </Switch>
//       </div>
//     </Router>
//     )
//   } 

// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />>
      </div>
    );
  }
}

 
export default App;