 import React, {Component} from 'react';
 import './App.css';
//  import Natbar from './Natbar.js';
 import About from './About/About.js';
 import Works from './Works/Works.js';
 import Contact from './Contact/Contact.js'

 class App extends Component{
   render(){
     return(
       <div className="container">
       <div className="header">
       <About/>
       </div>
      <div className="body">
        <Works/>
       </div>
       <div className="footer">
       <Contact/>
       </div>
       </div>
    )
   }
 }
 
export default App;
