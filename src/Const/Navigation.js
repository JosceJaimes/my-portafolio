import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from './Routes';


const Navigation = () => 
    <div>
        <ul>
            <li><Link to={routes.SPLASH}>SPLASH</Link></li>
            <li><Link to={routes.CONTACT}>CONTACTO</Link></li>
            <li><Link to={routes.WORKS}>TRABAJOS</Link></li>
            <li><Link to={routes.ABOUT}>SOBRE MI</Link></li>
            <li><Link to={routes.HOME}>INICIO</Link></li>
            {/* <li><Link to={routes}> */}
        </ul>
    </div>
export default Navigation;