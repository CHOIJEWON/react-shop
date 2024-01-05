import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { ColShoes } from './components/col-shoes';
import { shoesData } from './data';

function App() {

  let [shoes, setShoes] = useState(shoesData)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
      <Row>
        <ColShoes shoes={shoes}></ColShoes>
      </Row>
    </Container>
    </div>
  );
}

export default App;