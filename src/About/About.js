import React, {Component} from 'react';
import logo from '../Assets/yo.jpg'

class About extends Component{
  render(){
    return(
     <div className="container">
      <div className="header">
      <img src={logo} className="logo" alt="Imagen"/>
      </div>
      <div className="body">
      <p>
         Hola, un gusto, soy Josceline Jaimes. Soy una persona apasionada por 
         la técnologia, amo todo lo que tiene que ver con desarrollar productos futuristas que permiten 
         a la gente llevar una vida mas comoda, sin esforzarse, porque obviamente yo como Front-End Developer
         lo hago por ellos. Me encanta la música electrónica, leer y aprender cosas nuevas cada día. Creo frimemente que 
         todas las personas tiene algo que aportar y programar es mi forma de aportar.
       </p>
      </div>
      <div className="footer">

      </div>
     </div>
    )
  }
}


export default About;