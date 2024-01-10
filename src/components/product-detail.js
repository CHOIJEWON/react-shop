import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router";
import "../App.css";

export function Alert(props) {
    const [showAlert, setShowAlert] = useState(true);
  
    /**
     * useEffet는 dependency가 없는 경우 mount 되는 시점에 발현됨
     * dependency가 존재하는 경우 state가 달라지는 경우 발현됨 (mount시는 똑같이 동작함)
     * return() => {} 문이 존재하는 경우 return문 안의 코드는 mount 되기 전에 동작함
     * clean up function은 mount시에는 실행되지 않지만 unmount인 경우에는 실행하게 됨
      */
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowAlert(false);
        // return() => {}
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    });
  
    return showAlert ? (
      <div className="alert alert-warning">2초 이내 구매시 할인</div>
    ) : null;
  }

function TabContent(props){
  const divBox = [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>]

  const [fade, setFade] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {setFade('end')}, 10)
    return () => {
      clearTimeout(timer)
      setFade('')
    }
  }, [props.tab])

  
  return (
    <div className={`start ${fade}`}>
      {divBox[props.tab]}
    </div>
  )
}

export function ProductDetail(props){
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const {id} = useParams()    
    const product = [...props.shoes]
    const specificShoes = product.find((shoe) => Number(id) === shoe.id)
    const [tab, setTab] = useState(0)
  
    useEffect(() => {
      if(isNaN(inputValue)) return alert('숫자가 아닌 값을 입력하지 마세요')
    }, [inputValue])
    
    
    return (
      <div className="fade-in">
        <div className="container">
            {/* <button onClick={() => setCount(count+1)}> 다시 </button> */}
            <Alert count={count} />
            <div className="row">
                <div className="col-md-6">
                    <img src={specificShoes.img} width="100%"/>
                </div>
                <div className="col-md-6">
                    <input onInput={(e) => setInputValue(Number(e.target.value))}></input>
                    <h4 className="pt-5">{specificShoes.title}</h4>
                    <p>{specificShoes.content}</p>
                    <p>{specificShoes.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            
            <Nav variant="tabs" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link onClick={() => setTab(0)} defaultActiveKey eventKey="link-1">탭1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setTab(1)} eventKey="link-2">탭2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setTab(2)}eventKey="link-3" > 탭3 </Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div> 
      </div>
    )
}
