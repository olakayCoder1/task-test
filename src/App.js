import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"
import { db } from './firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore'

function App() {
    const [ users , setUsers ] = useState([])
    const usersCollection = collection(db, "users")
    const [ newName , setNewName ] = useState("")
    const [ age , setAge ] = useState(0)


  async function addUser(){
    await addDoc(usersCollection , { name: newName , age: Number(age)})
  }

    useEffect(()=>{
      const getUsers = async ()=>{
        const data = await getDocs(usersCollection);
        setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id })))
        
      }
      getUsers()
    },[])

    console.log(newName , age)
  return (
    <div className=' p-4'>
      <h2>HELLO WORLD</h2>
      <input className='m-5' type="text" onChange={(event) => { setNewName(event.target.value)}} name="name"  placeholder='Name...'/>
      <input className='m-4' type="number" onChange={(event) => { setAge(event.target.value)}} name="age" placeholder='Age..'/><br />

      <button onClick={addUser}
      className='m-4 p-2 rounded-md bg-green-600 text-white'>Add User</button>


      {users.length != 0 && users.map((user, index)=>{
        return (
          <>
          <h1 key={index}>{user.name} , {user.age}</h1> 
          <button  >Increase age</button>
          </>
            
        )
      })}
      
    </div>
  );
}

export default App;
