import React, {Component} from 'react';
import colores from '../Assets/colores.jpg';
import londres from '../Assets/londres.jpeg';
import paris from '../Assets/paris.jpg';
import './Works.css'

class Works extends Component{
  render(){
    return(
      <div className="container">
            <h2>MIS TRABAJOS</h2>
            <div class="div-img" >
              <a href="https://joscejaimes.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/login.html"><img className="img" src={paris} alt="Imagen"/></a>
              <div className="text"><h3>DATA DASHBOARD</h3>Una aplicacion creada para el staff de laboratoria. El fin de esta aplicaccion es
              poder ayudarlos con sus tareas diarias del manejo de la informacion de las estudiantes de una manera mas sencilla.
              </div>
            </div>
            <div class="div-img" >
              <a href="https://joscejaimes.github.io/cdmx-2018-06-bc-core-pm-foodmap/views/splash.html"><img className="img" src={londres} alt="Imagen"/></a>
              <div className="text"><h3>FAST FOOD</h3>Una aplicaciòn que nos permite visualizar los restaurantes más cercanos a donde nos encontramos</div>
            </div>
            <div class="div-img" >
              <a href="https://www.google.com/"><img className="img" src={colores} alt="Imagen"/></a>
              <div className="text"><h3>NAME BABY</h3>Una aplicaciòn diseñada para hombres y mujeres que estan en haras de ser padres de un pequeño  o una pequeña </div>
            </div>
      </div>
    )
  }
}
export default Works;

