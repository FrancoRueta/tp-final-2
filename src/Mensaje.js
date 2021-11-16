import React from 'react';
import './styles/mensaje.css'

const Mensaje = ({mensaje, color}) => {
    return ( 
        <li className={color}>{mensaje} {console.log(mensaje)}</li>
     );
}
 
export default Mensaje;