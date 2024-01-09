import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ColShoes } from './col-shoes';


export function MoreProductListButton(props){
  const [click, setClick] = useState(0)
  const [moreData, setMoreData] = useState(true)
  const url = ['https://codingapple1.github.io/shop/data2.json', 'https://codingapple1.github.io/shop/data3.json']
  
  useEffect(() => {
    if(click === url.length) setMoreData(false)
  }, [click])

  return moreData ? (
    <button onClick={() => {
      
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      axios.get(url[click])
      .then((data) => {
        const newShoes = data.data;

        const shoesArray = [...props.shoes, ...newShoes]

        props.setShoes(shoesArray);

        console.log(props.shoes)
      })
      .catch(() => {
        console.log('실패함')
      })
      setClick(click + 1)
    }
    }>버튼</button>
  ): null
}

export function MainPage(props){
    return (
        <>        
          <div className='main-bg'></div>
          <Container>
            <Row>
              <ColShoes setId={props.setId} shoes={props.shoes}></ColShoes>
            </Row>
            <MoreProductListButton shoes={props.shoes} setShoes={props.setShoes} />
          </Container>
        </>
    )
}