import { useParams } from "react-router"

export function ProductDetail(props){
    const {id} = useParams()
    
    const product = [...props.shoes]
    console.log("🚀 ~ file: product-detail.js:7 ~ ProductDetail ~ product:", product)
    
    const specificShoes = product.find((shoe) => Number(id) === shoe.id)
    console.log("🚀 ~ file: product-detail.js:10 ~ ProductDetail ~ specificShoes:", specificShoes)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={specificShoes.img} width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{specificShoes.title}</h4>
                    <p>{specificShoes.content}</p>
                    <p>{specificShoes.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

