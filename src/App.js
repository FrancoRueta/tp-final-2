import React, {Fragment} from 'react';
import Header from './Header';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
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
        <Col className="columna-chat">
          <Chat/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;