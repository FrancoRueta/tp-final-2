import React, {useState} from 'react';
import './styles/mensaje.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Respuesta = ({mensaje}) => {
    

    const generarRespuesta = (msg) => {
        const url = `https://fathomless-mesa-19690.herokuapp.com/http://api.brainshop.ai/get?bid=161003&key=XWultLaoaGjbh1ZQ&uid=5050&msg=${msg}`;
        axios.get(url)
        .then((response) => {
            console.log(response.data.cnt);
            return (response.data.cnt);
        })
        .catch(error => console.log(error));
    }

    return ( 
        <li className="verde">BOT: {generarRespuesta(mensaje)}</li>
     );
}
 
export default Respuesta;