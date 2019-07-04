import React from "react";
import { Card, CardBody, CardText, Row, Col } from 'reactstrap';
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
import './Tools.css'






const Works = () => {
    
    return (
        <div className="container">

        <Card  > 
        <h2>MIS HERRAMIENTAS</h2>
          <CardBody className="content">
          <Row>
            <Col sm="4">
            <CardText >
            <div className="images">
            <img className="tools" src={js} alt="Imagen" width="150" height="150" />
          </div>
          <div className="images ">
            <img className="tools col-lg-10" src={node} alt="Imagen" width="80" height="100"/>
            </div>
          <div className="images ">
            <img className="tools" src={bootstap} alt="Imagen" width="100" height="100"/>
          </div>
    
            </CardText>
            </Col>
            <Col sm="4">
            <CardText >
            <div className="images ">
              <img className="tools" src={css} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="images ">
              <img className="tools" src={fire} alt="Imagen" width="100" height="100" />
            </div>
            <div className="images ">
            <img className="tools" src={git} alt="Imagen" width="100" height="100"/>
            </div> 

            </CardText>
            </Col>
            <Col sm="4">
            <CardText >
            <div className="images ">
              <img className="tools" src={html} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="images ">
              <img className="tools" src={react} alt="Imagen" width="100" height="100"/>
            </div>
            <div className="images ">
              <img className="tools" src={reactn} alt="Imagen" width="100" height="100"/>
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