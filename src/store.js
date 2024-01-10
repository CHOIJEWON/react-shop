import { configureStore, createSlice } from '@reduxjs/toolkit';
const user = createSlice({
    name: "user",
    initialState: "kim",
    reducers: {
        updateUserName(state){
            console.log(state)
            return 'john kim';
        }
    }
})

export const {updateUserName} = user.actions

const cart = createSlice({
    name: "cart",
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers: {
        itemUpCount(state, action){
            const findState = state.find((item) => item.id === action.payload)
            findState.count ++ 
        },
        addCartItem(state, action){
            const findShoes = state.find((item) => item.id === action.payload.id)
            if(findShoes) findShoes.count ++
            else state.push(action.payload)
        },
        deleteItem(state, action){
            const findIndex = state.findIndex((item) => item.id === action.payload)
            state.splice(findIndex, 1)
        }
    }
})

export const {itemUpCount, addCartItem, deleteItem} = cart.actions

export default configureStore({
  reducer: { 
    cart: cart.reducer,
    user: user.reducer,
  }
}) 