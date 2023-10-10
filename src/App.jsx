import { useState, useEffect } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar'
import FormAddUser from './pages/FormAddUser'
import FormEditUser from './pages/FormEditUser';
import Root from './pages/Root';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from './store/index-toolkit';


function App() {
const dispatch = useDispatch();
const bio = useSelector(state => state.users.items);

const [count, setCount] = useState(0)



  
  function handleDelete(user) {
    console.log('user id')
    console.log(user);
    alert('Delete succefully!')
 //  dispatch({type: 'delete', user:user})
  dispatch(usersActions.deleteItem(user))
  }

function handleAddUser(user){
console.log('show add');
const counter = count+1;
console.log(counter);
setCount(counter)
if(user){
 // dispatch({type: 'add', user:user})
 dispatch(usersActions.addItem(user))
}
}
function handleEditUser(user){
 
let newBio= bio.map((item) => {
  if(item.id == user.id){
    return item = {...item, ...user}
}else{
 return item
}
});
//dispatch({type: 'edit', user:newBio})
dispatch(usersActions.editItem(newBio))
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
         path:'/',
        element:<div className="row">
         {bio && bio.map((item,index) => <Contacts listUsers={item} key={item.id + '' + index} onClickDelete={handleDelete} />)}</div>
       },
        {
         path: '/contact-add',
         element: <div> <h1>Add users</h1> <FormAddUser id={count}  onClickAdd={handleAddUser}  /></div>
         },
         {
          path: '/contact-edit',
          element: <div className="container mt-5">  <h1>Edit users</h1> <div className='row'> {bio && bio.map((item,index) => <FormEditUser listUsers={item} key={item.id + '' + index}  onClickSave={handleEditUser}  />)}</div> <button  className="btn btn-success" ><NavLink to="/">Return to home</NavLink></button></div>
          } 
    ]
  }
])

  return (
    <>
     
       <RouterProvider router={router} />
     

    </>
  )
}

export default App
