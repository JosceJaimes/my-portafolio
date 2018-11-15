import React, { Component } from 'react';
import '../Herramientas/Herramientas.css'
import js from '../Assets/javascript.png';
import block from '../Assets/Blockchain.png';
import bootstap from '../Assets/bootstap.png';
import css from '../Assets/css.png';
import fire from '../Assets/firebase.png';
import git from '../Assets/git.jpg';
import html from '../Assets/html.png';
import node from '../Assets/nodejs.png';
import react from '../Assets/react.png';
import reactn from '../Assets/react-native.png';


class Herramientas extends Component {
  render(){
    return(
      <div className="container">
        <div className="tools row">
          <div className="col-lg-4 ">
            <img className="tools" src={js} alt="Imagen" width="100" height="100"/>
          </div>
          <div className="col-lg-4 ">
            <img className="tools" src={block} alt="Imagen" width="100" height="100"/>
          </div>
          <div className="col-lg-4 ">
            <img className="tools" src={bootstap} alt="Imagen" width="100" height="100"/>
          </div>
        </div>

          <div className="tools row">
            <div className="col-lg-4 ">
              <img className="tools" src={css} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="col-lg-4 ">
              <img className="tools" src={fire} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="col-lg-4 ">
            <img className="tools" src={git} alt="Imagen" width="100" height="100"/>
            </div>
          </div>

          <div className="tools row">
            <div className="col-lg-4 ">
              <img className="tools" src={html} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="col-lg-4 ">
              <img className="tools" src={react} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="col-lg-4 ">
              <img className="tools" src={reactn} alt="Imagen" width="100" height="100"/>
            </div>
          </div>
          
          <div className="tools row">
              <div>
              <img className="tools col-lg-10" src={node} alt="Imagen" width="80" height="180"/>
              </div>
        </div>
      </div>
    )
  }

}


export default Herramientas;


