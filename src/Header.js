import React from 'react';
import {Col } from 'react-bootstrap';
import bird from './utils/Bird.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/header.css';


const Header = ({titulo}) => {
    return (
        <Col className="header-container">
            <img src={bird} alt="logo" className="header-isotipo d-none d-sm-block"/>
            <p className="header-titulo">{titulo}</p>
        </Col>
          
         );
}
 
export default Header;

