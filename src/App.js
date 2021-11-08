import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import './styles/app.css'

function App() {
  return (
    <Fragment>
      <Header
        titulo={"BirdTalk"}
      />

      <Chat
      />

      <Footer
        titulo={"BirdTalk"}
      />
    </Fragment>
    
  );
}

export default App;