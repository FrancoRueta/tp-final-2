import React from 'react';
import './styles/mensaje.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Mensaje = ({mensaje, color}) => {
    return ( 
        <li className={color}>{mensaje}</li>
     );
}
 
export default Mensaje;