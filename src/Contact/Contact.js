import React, {Component} from 'react';
import './Contact.css'
import face from '../Assets/face.png'
import link from '../Assets/linkedin.png';
import git from '../Assets/git.jpg';
import gmail from '../Assets/gmail.jpg';
import what from '../Assets/whatsapp.png';
class Contact extends Component{
  render(){
    return(
    <div className="Container">
      <div className="contenido">
      <h4>
        Contacto
      </h4>
      <div className="contact">
      <div className="contactme">
      <img src={face} className="link" width="80" height="60" alt="Imagen"/>
      <span><a href="https://www.facebook.com/joscelineesmeralda.jaimesjuarez"><p>https://www.facebook.com/joscelineesmeralda.jaimesjuarez</p></a></span>
      </div>  
      <div className="contactme">
      <img src={link} className="link"width="80" height="60" alt="Imagen"/>
      <span><a href="https://www.linkedin.com/in/joscejaimes/"><p>https://www.linkedin.com/in/joscejaimes/</p></a></span>
      </div>  
      <div className="contactme">
      <img src={git} className="link"width="80" height="60" alt="Imagen" />
      <span><a href="https://github.com/JosceJaimes"><p>https://github.com/JosceJaimes</p></a></span>
      </div>  
      <div className="contactme">
      <img src={gmail} className="link" width="80" height="60" alt="Imagen" />
      <span><a href=""><p>joscejaimes94@gmail.com</p></a></span>
      </div>  
      <div className="contactme">
      <img src={what} className="link" width="80" height="60" alt="Imagen" />
      <span><a href=""><p>0445544848488</p></a></span>
      </div>    
      </div>
      </div>
    </div>
    )
  }

}


export default Contact;