import React from 'react';
import Header from './Header';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import './styles/app.css'

function App() {

  return (
    <Container fluid>
      <Row>  
        <Header
        titulo={"BirdTalk"}
        />
      </Row>
      <Row>
        <Chat/>
      </Row>
    </Container>
  );
}

export default App;