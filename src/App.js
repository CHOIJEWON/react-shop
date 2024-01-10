import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart';
import { MainPage } from './components/main-page';
import { ProductDetail } from './components/product-detail';
import { shoesData } from './data';

function App() {
  
  const [shoes, setShoes] = useState(shoesData)
  const navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    <Routes>
      <Route path='/' element={<MainPage setShoes={setShoes} shoes={shoes}></MainPage>}></Route>
      <Route path='/detail/:id' element={<ProductDetail shoes={shoes}></ProductDetail>}></Route>
      <Route path='*' element={<div>없는 페이지에요</div>}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/event' element={<About></About>}>
        <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
        <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;