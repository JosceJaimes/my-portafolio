import React from "react";
import { Card, CardBody, CardText, Row, Col } from 'reactstrap';
import './Contact.css'
import face from '../Assets/face.png'
import link from '../Assets/linkedin.png';
import git from '../Assets/git.jpg';
import gmail from '../Assets/gmail.jpg';



const Contact = () => {
    return (
        <div className="container">

      <Card >

        <CardBody>
        <Row>
          <Col sm="3">
          <CardText >
          <div className="contactme">      
      <a href="https://www.facebook.com/joscelineesmeralda.jaimesjuarez"><img src={face} className="link" width="60" height="60" alt="Imagen" /></a>
      </div> 
          </CardText>
          </Col>
          <Col sm="3">
          <CardText >
          <div className="contactme">      
          <a href="https://www.linkedin.com/in/joscejaimes/"><img src={link} className="link"width="80" height="60" alt="Imagen"/> </a>
      </div> 
          </CardText>
          </Col>
          <Col sm="3">
          <CardText >
          <div className="contactme">      
          <a href="https://github.com/JosceJaimes"><img src={git} className="link"width="60" height="60" alt="Imagen" /></a>
      </div> 
          </CardText>
          </Col>
          <Col sm="3">
          <CardText >
          <div className="contactme">      
          <img src={gmail} className="link" width="60" height="60" alt="Imagen" />
          {/* <a href={`mailto:joscejaimes94@gmail.com${this.props.email}`}><img src={gmail} className="link" width="60" height="60" alt="Imagen" /></a> */}
      </div> 
          </CardText>
          </Col>
          </Row>
        </CardBody>

      </Card>

        </div>
    )
}

export default Contact;