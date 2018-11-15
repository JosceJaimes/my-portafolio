import React, {Component} from 'react';
import './Contact.css'
import face from '../Assets/face.png'
import link from '../Assets/linkedin.png';
import git from '../Assets/git.jpg';
import gmail from '../Assets/gmail.jpg';
// import what from '../Assets/whatsapp.png';
class Contact extends Component{
  render(){
    return(
    <div className="Container">
      <div className="contenido">
      <div className="contact">
      <div className="contactme">      
      <a href="https://www.facebook.com/joscelineesmeralda.jaimesjuarez"><img src={face} className="link" width="60" height="60" alt="Imagen" /></a>
      </div>  
      <div className="contactme">
      <a href="https://www.linkedin.com/in/joscejaimes/"><img src={link} className="link"width="80" height="60" alt="Imagen"/> </a>
      </div>  
      <div className="contactme">
      <a href="https://github.com/JosceJaimes"><img src={git} className="link"width="60" height="60" alt="Imagen" /></a>
      </div>  
      <div className="contactme">
      <a href={`mailto:joscejaimes94@gmail.com${this.props.email}`}><img src={gmail} className="link" width="60" height="60" alt="Imagen" /></a>
      {/* <a href={"maito:joscejaimes94@gmail.com?Subject=Hello%20again" + this.props.email} target="_top"> <img src={gmail} className="link" width="80" height="60" alt="Imagen" /></a> */}
      </div>      
      </div>
      </div>
    </div>
    )
  }

}


export default Contact;