import { Container, Row } from 'react-bootstrap';
import { ColShoes } from './col-shoes';

export function MainPage(props){
    return (
        <>        
          <div className='main-bg'></div>
          <Container>
            <Row>
              <ColShoes shoes={props.shoes}></ColShoes>
            </Row>
          </Container>
        </>
    )
}