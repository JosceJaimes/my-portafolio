import React, {Component } from 'react';
import piano from '../Assets/piano.gif'
import '../Splash/Splash.css';
import { Redirect } from 'react-router';
import about from '../Natbar';
// import * as Routes from '../Const/Routes'
// import { ABOUT } from '../Const/Routes';


class Bienvenida extends Component{
    constructor(props){
      super(props)
        this.state={
          redirect:false
        }
      }
    
    setRedirect=()=>{
      console.log("redireccionando");
      if(this.state.redirect){
        return <Redirect to='/aboutme'/>
      }
    }
    render(){
        return(
          <div className="container">
              <div className="header">
                  <img
                  src={piano}
                  className="piano"
                  alt="Imagen"
                  />
              </div>
              <div className="body">
                <div className="row center-xs center-sm">
                  <div className="animated swing">
                    <h2>JJ</h2>
                    <h3>JOSCELINE JAIMES</h3>
                  </div>
                </div>
              </div>
              <div className="footer">
              <button onClick={this.setRedirect} >Conoceme</button>

              </div>
          </div>
        )
    }
}

export default Bienvenida;






 /* <div className="container-App">
<div clasName="header-App" >

</div>
<div clasName="body-App" >
  <div className="row center-xs center-sm">
    <div className="animated swing">
      <h1>JJ</h1>
      <h3>JOSCELINE JAIMES</h3>
    </div>
  </div>
  <button>
      Conoceme!
    </button>
</div>
<div clasName="footer-App" >

</div>

</div> */ 