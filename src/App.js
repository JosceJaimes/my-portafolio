// import React from 'react';
// import {BrowserRouter as Router, Route, } from 'react-router-dom'
 import logo from './logo.svg';
// import './App.css';
// import Navigation from './Const/Navigation'
// import * as routes from './Const/Routes'
// import Home from './Home/Home';
// import Splash from './Splash/Splash';
// import About from './About/About';
// import Contact from './Contact/Contact';
// import Works from './Works/Works';
 
// const App = () =>
// <Router>
//   <div>
//     <Navigation />
//     <Route exact path={routes.HOME}
//     Component={Home}/>

//     <Route exact path={routes.SPLASH}
//     component={Splash}/>

//     <Route exact path={routes.ABOUT}
//     component={About}/>

//     <Route exact path={routes.CONTACT}
//     component={Contact}/>

//     <Route exact path={routes.WORKS}
//     component={Works}/>
//   </div>
// </Router>


 
// export default App;








 import React, {Component} from 'react';
 import Bienvenida from './Splash/Splash';

 class App extends Component{
   render(){
     return(
       <div className="container">
       <div className="header">
       </div>
      <div className="body">
         <Bienvenida />
       </div>
       <div className="footer">
       </div>
       </div>
    )
   }
 }
 
export default App;

/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */



// class App extends Component {
//   render() {
//     return (
//       <div className="container-App">
//         <div clasName="header-App" >

//         </div>
//         <div clasName="body-App" >
//           <div className="row center-xs center-sm">
//             <Splash />
//           </div>
//         </div>
//         <div clasName="footer-App" >

//         </div>

//       </div>
//     );
//   }
// }

