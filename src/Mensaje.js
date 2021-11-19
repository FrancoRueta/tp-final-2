import React from 'react';
import './styles/mensaje.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Mensaje = ({texto,color}) => {
    return ( 
        <li className={color}>{texto}</li>
     );
}
 
export default Mensaje;