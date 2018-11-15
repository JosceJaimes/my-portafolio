import React, {Component} from 'react';
import logo from '../Assets/me.jpg';
import '../About/About.css';
import Contact from '../Contact/Contact'

class About extends Component{
  render(){
    return(
     <div className="container1">
      <div className="div-img1">
      <h2>SOBRE MI</h2>
      <img src={logo} className="logo col-md-6" alt="Imagen"/>
      </div>
      <div className="text1 col-md-6" >
         Hola, un gusto, soy Josceline Jaimes. 
         Me apasiona la técnologia, amo todo lo que tiene que ver con desarrollar productos futuristas que permiten 
         a la gente llevar una vida mas comoda, sin esforzarse, porque obviamente yo como Front-End Developer
         lo hago por ellos. Me encanta la música electrónica, leer y aprender cosas nuevas cada día. Creo firmemente que 
         todas las personas tiene algo que aportar y programar es mi forma de aportar.
         Contactame!
          <Contact/>
       {/* </div> */}
      </div>
     </div>
    )
  }
}


export default About;