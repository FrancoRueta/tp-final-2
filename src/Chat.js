import React, {Fragment} from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles/chat.css'
import Mensaje from './Mensaje';
import Respuesta from './Respuesta';

const Chat = () => {

    const usuarioRandom = Math.floor(Math.random() * 1000) + 1;

    const [msgActual, setMsgActual] = React.useState('');
    const [respuesta, setRespuesta] = React.useState({});


    const [listaMensajes, setListaMensajes] = React.useState([
        {
            texto: '',
            color: ''
        }]);

    const [listaRespuestas, setListaRespuestas] = React.useState([
        {
            texto: '',
            color: ''
        }]);

    

    const actualizarMensaje = (e) => {
        e.preventDefault();
        setMsgActual(e.target.value);
    }

    const generarRespuesta = async() => {
        try{
            const botUrl =  `https://fathomless-mesa-19690.herokuapp.com/http://api.brainshop.ai/get?bid=161003&key=XWultLaoaGjbh1ZQ&uid=${usuarioRandom}&msg=${msgActual}`;
            const response = await fetch(botUrl);
            const data = await response.json();
            setRespuesta(data.cnt);
            setListaMensajes([...listaMensajes, {texto: "TU: "+msgActual, color: 'verde'}]);
            setListaRespuestas([...listaRespuestas, {texto: "BOT: "+ data.cnt, color: "celeste"}]);
        }catch(error){
            console.log(error);
        }

    }

    const tamanioMensaje = listaMensajes.length;

    const generarChat = () => {
        const chat = [];
        for(let i = 1; i < tamanioMensaje; i++){
            chat.push(listaMensajes[i]);
            chat.push(listaRespuestas[i]);
            if(chat.length > 9){
                let elementoBorrado = chat.shift();
                let elementoBorrado2 = chat.shift();
            }
        }
        return chat;
    }

    const chatRender = (listaDeMSG) => (
        <Fragment>
          {listaDeMSG.map(msgRender => (
            <Mensaje texto={msgRender?.texto} color={msgRender?.color}/>
          ))}
        </Fragment>
      ); 

    return ( 
        <Col className="chat-tarjeta-principal">
            <Row className="chat-row">
                <ul className="no-padding-left">
                    {
                        chatRender(generarChat())
                    }
                </ul>
            
            </Row>
            

            <Row className="chat-input">
                <input
                    type='text'
                    name='mensajeActual'
                    className='chat-input-text'
                    placeholder='Pruebe diciendo: hello! how are you?'
                    onChange={actualizarMensaje}
                />

                <button type="submit" onClick={generarRespuesta} className="chat-input-button"> Enviar </button>
            </Row>
        </Col>
        );
}
 
export default Chat;