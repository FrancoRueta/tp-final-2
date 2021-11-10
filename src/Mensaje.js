import React from 'react';


const Mensaje = ({mensaje}) => {
    return ( 
        <li>{("hola".toUpperCase())}: {mensaje} {console.log(mensaje)}</li>
     );
}
 
export default Mensaje;