import React from "react";
import { Card, CardBody, CardText, Row, Col, Button } from 'reactstrap';
import foodmap from '../Assets/foodmap.jpg';
import dashboard from '../Assets/dashboard.png';
import moviapp from '../Assets/moviapp.jpg';
import './Works.css'



const Works = () => {

    return (
        <div className="container">

        <Card  > 
        <h2>MIS TRABAJOS</h2>
          <CardBody className="conten">
          <Row>
            <Col sm="4">
            <CardText >
            <div className="dev-img" >
              <img className="img" src={dashboard} alt="Imagen"/>
              <div className="text">
              <h3>DATA DASHBOARD</h3>
              <p>Una aplicacion creada para el staff de laboratoria. El fin de esta aplicaccion es
              poder ayudarlos con sus tareas diarias del manejo de la informacion de las estudiantes de una manera mas sencilla.
              </p>
              <div className="buttons">
              <a href="https://joscejaimes.github.io/cdmx-2018-06-bc-core-am-data-dashboard/index.html"><Button outline color="primary">Ver más</Button></a>
              <a href="https://github.com/JosceJaimes/cdmx-2018-06-bc-core-am-data-dashboard"><Button outline color="secondary">Git-Hub</Button></a>
              </div>
              </div>
              </div>
            </CardText>
            </Col>
            <Col sm="4">
            <CardText >
            <div className="dev-img" >
              <img className="img" src={foodmap} alt="Imagen"/>
              <div className="text">
              <h3>FAST FOOD</h3>
              <p>Una aplicaciòn que nos permite visualizar los restaurantes más cercanos a donde nos encontramos
              </p>
              <div className="buttons">
              <a href="https://joscejaimes.github.io/Food-App/src/index.html"><Button outline color="primary">Ver más</Button></a>
              <a href="https://github.com/JosceJaimes/Food-App"><Button outline color="secondary">Git-Hub</Button></a>
              </div>
              </div>
            </div> 
            </CardText>
            </Col>
            <Col sm="4">
            <CardText >
            <div className="dev-img" >
              <a href="https://www.google.com/"><img className="img" src={moviapp} alt="Imagen"/></a>
              <div className="text">
              <h3>APP MOVIE</h3>
              <p>Una aplicaciòn diseñada para hombres y mujeres que estan en haras de ser padres de un pequeño  o una pequeña 
              </p>
              <div className="buttons">
              <a href="https://joscejaimes.github.io/cdmx20181-Track-FE-themovieapi/src/index.html"><Button outline color="primary">Ver más</Button></a>
              <a href="https://github.com/JosceJaimes/cdmx20181-Track-FE-themovieapi"><Button outline color="secondary">Git-Hub</Button></a>
              </div>
              </div>
            </div>
            </CardText>
            </Col>

            </Row>
          </CardBody>
  
        </Card>
  
          </div>
    )
}

export default Works;