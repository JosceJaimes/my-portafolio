import React from 'react';
import { Row, Col } from 'reactstrap';
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Tools from '../Tools/Tools';
import Contact from '../Contact/Contact';
import Works from '../Works/Works';



const Home = () => {
  return (
    <div>
      <Row>
        {/* <Col sm="1">
          <Navbar />
        </Col> */}
        <Col sm="12">
          <About />
          <Works />
          <Tools />
          <Contact />
        </Col>
      </Row>
    </div>
  );
};

export default Home;