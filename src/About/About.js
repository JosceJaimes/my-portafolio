import React from 'react';
import { Row, Col, Card, CardBody, CardText  } from 'reactstrap';
import logo from '../Assets/perfil.jpeg';
import './About.css'

const About = (props) => {
  return (
    <div className="container">
              <h2>SOBRE MI</h2>
      <Row>
        <Col  sm="2" md="3" lg="6">
          <img src={logo} className="logo" alt="Imagen" />
        </Col>
        <Col sm="10" md="9" lg="6">
    <div className="text">
      <Card >
        <CardBody style={{  borderColor: '#333' }}>
          <CardText >
          Hola, un gusto, soy Josceline Jaimes.
            Me apasiona la técnologia, amo todo lo que tiene que ver con desarrollar productos futuristas que permiten
            a la gente llevar una vida mas comoda, sin esforzarse, porque obviamente yo como Front-End Developer
            lo hago por ellos. Me encanta la música electrónica, leer y aprender cosas nuevas cada día. Creo firmemente que
            todas las personas tiene algo que aportar y programar es mi forma de aportar.
            </CardText>
        </CardBody>
      </Card>
    </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;