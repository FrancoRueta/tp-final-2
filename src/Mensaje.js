import React from 'react';
import './styles/mensaje.css'

const Mensaje = ({mensaje}) => {
    //make a function to change the color of the message each time it is called
    const color = () => {
        let chosenColor = "chatbox-green";
        if(mensaje.props.error){
            chosenColor = "chatbox-lightblue";
        }
        return chosenColor;
    }

    return ( 
        <li className="chatbox-green">{mensaje} {console.log(mensaje)}</li>
     );
}
 
export default Mensaje;