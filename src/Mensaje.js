import React from 'react';
import './styles/mensaje.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Mensaje = ({mensaje}) => {
    return ( 
        <li className="celeste">TU: {mensaje}</li>
     );
}
 
export default Mensaje;