import { Col } from "react-bootstrap"


export function ColShoes(props) {
    console.log(props.shoes)
    return props.shoes.map((shoe) => {
        return (
            <Col>
                <img src={`${process.env.PUBLIC_URL}${shoe.img}`} width="80%" />
                <h4> {shoe.title} </h4>
                <p> {shoe.content} </p>
                <p> {shoe.price} </p>
            </Col>
        )
    })
}