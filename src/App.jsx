import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import FormAddUser from './components/FormAddUser'
function App() {
  const [usersFetch, setUsersFetch] = useState('https://jsonplaceholder.typicode.com/users');
  const [bio, setBio] = useState(null);
  const [currentPage, setCurrentPage] = useState('home')
  useEffect(() => {
    
    async function startFetching() {
      setBio(null);
      const result = await fetch(usersFetch);
      let users = await result.json();
      if (!ignore) {
        console.log(users)
        setBio(users);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [usersFetch]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  function handleDelete(user) {
    console.log('user id')
    console.log(user);
    let newBio = bio.filter((item) => item.id != user);
    setBio(newBio);
    alert('Delete succefully!')
    console.log(newBio);
  }

function handleAddUser(user){
console.log('show add')
if(user){
  setBio([...bio,user]);
  
}
setCurrentPage('home');

}

  return (
    <>
      <Navbar onClick1={handlePageChange} />
      {/* <nav>
      <ul>
        <li><a href="#home" onClick={() => setCurrentPage('home')}>List contacts</a></li>
        <li><a href="#edit-contacts" onClick={() => setCurrentPage('edit-contacts')}>Edit contacts</a></li>
      </ul>
    </nav> */}
      {currentPage === 'home' && <div className='row'>
        <h1>List users</h1>
        {bio && bio.map((item,index) => <Contacts listUsers={item} key={item.id + '' + index} onClickDelete={handleDelete} />)}
      </div>
      }
      {currentPage === 'add-contact' && <div> <h1>Add users</h1> <FormAddUser id={bio.length} onClickAdd={handleAddUser}  /></div>
      }

    </>
  )
}

export default App
