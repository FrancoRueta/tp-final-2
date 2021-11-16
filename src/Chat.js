import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles/chat.css'
import Mensaje from './Mensaje';

const Chat = () => {


    //definimos el state que se va a encargar de almacenar todos los mensajes
    const [mensajesDelChat, setMensajesDelChat] = React.useState([
    ]);

    //definimos el state que se va a encargar de almacenar el mensaje que se esta escribiendo
    const [mensaje, setMensaje] = React.useState('');


    //funcion que se activa cada vez que el input se actualiza
    const actualizarMensajeActual = (event) => {
        event.preventDefault();
        setMensaje(event.target.value);
    }

    //funcion que se encarga de generar la respuesta del bot
    const generarRespuestaDelBot = () => {
        setMensajesDelChat([...mensajesDelChat, 'BOT: hola, tristemente hubo un problema con la api... pero aqui estoy! :)']);
    }


    //funcion que se encarga de agregar un mensaje al chat
    const agregarMensajeAlChat = (event) => {
        event.preventDefault();
        setMensajesDelChat([...mensajesDelChat, mensaje]);
        setMensaje('');
    }

    
    

    return ( 
        <Col className="chat-tarjeta-principal">
            <Row className="chat-row">
                <ul className="no-padding-left">
                    {
                        mensajesDelChat.map((mensaje) => (
                            <Mensaje
                                mensaje={mensaje}
                            />
                        ))
                    }
                </ul>
            
            </Row>
            

            <Row className="chat-input">
                <input
                    type='text'
                    name='mensajeActual'
                    className='chat-input-text'
                    placeholder='Pruebe diciendo: hello! how are you?'
                    onChange={actualizarMensajeActual}
                    value={mensaje}
                />

                <button type="submit" onClick={agregarMensajeAlChat} className="chat-input-button"> Enviar </button>
            </Row>
        </Col>
        );
}
 
export default Chat;