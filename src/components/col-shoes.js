import { useNavigate } from 'react-router-dom';


export function ColShoes(props) {
    let navigate = useNavigate()

    return props.shoes.map((shoe) => {
        return (
            <div className="col-md-4">
                <img onClick={() => {
                    navigate(`/detail/${shoe.id}`)
                }} src={`${process.env.PUBLIC_URL}${shoe.img}`} width="80%" />
                <h4> {shoe.title} </h4>
                <p> {shoe.content} </p>
                <p> {shoe.price} </p>
            </div>
        )
    })
}