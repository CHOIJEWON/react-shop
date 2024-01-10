import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, itemUpCount } from '../store.js'


export function Cart(){
    const items = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    
    return (
        <div>
            {user}의 장바구니
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                    </tr>
                </thead>
                    {
                        items.map((item, index) => (
                            <tbody key={item.id}>
                                <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td><button onClick={() => dispatch(itemUpCount(item.id)) }>+</button></td>
                                <td><button onClick={() => dispatch(deleteItem(item.id)) }>-</button></td>
                                </tr>
                            </tbody>
                        ))
                    }
            </Table> 
        </div>
    )
}