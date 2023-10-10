import { createStore } from 'redux';
import { getUsers } from '../API';
import { useEffect } from 'react';
const user = await getUsers();
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


const store = createStore(reducerFn);
export default store;