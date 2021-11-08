import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bird from './utils/Bird.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/footer.css';


const Footer = ({titulo}) => {
    return (
        <Col className="footer-container">
            <p className="creado-por">Creado por @francorueta en github</p>
            <p className="hecho-para">Hecho para la materia construccion de interfaces de usuario en la UNAHUR</p>
        </Col>
          
         );
}
 
export default Footer;

