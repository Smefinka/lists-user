import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../API';
import cartSlice from './cartSlice';
const user = await getUsers();

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: user
    },
    reducers: {
        deleteItem(state, action){
            const delItemID = +action.payload;
            const updatedItems = state.items.filter(item => item.id !== delItemID);
            state.items = updatedItems;
        },
        addItem(state, action){
            state.items = [...state.items,action.payload]
        },
        editItem(state, action){
            state.items = action.payload;
        }
    }
})


const initialState = {
    items: user
}
const reducerFn = (state = initialState, action) => {
    if (action.type === 'delete') {
        const updatedItems = state.items.filter(item => item.id !== +action.user);
        return {
            ...state,
            items: updatedItems
        }
    } else if (action.type === 'add') {
        const updatedItems = [...state.items,action.user]
        return {
            items: updatedItems
        }
    }else if(action.type === 'edit'){
        
        return {
            items: action.user
        }
    }
    console.log(state.items);
    return state;

}



const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        cart: cartSlice.reducer
    }
});
export const usersActions = usersSlice.actions;
export const cartsSlice = cartSlice.actions;
export default store;