import { useEffect, useState } from 'react'
// import { getDataToys } from '../server/Toys/Toys'  
// import { getDataUsers } from '../server/Users/Users';
import { postToys } from '../server/Toys/Toys';
import { postUsers } from '../server/Users/Users';

const DatosToys = () => {
  const [toys, setToys] = useState([]);
  const [users, setUsers] = useState([]);
  const [newToy, setNewToy] = useState('');
  const [inpName, setInpName] = useState('')
  const [inpAge, setInpAge] = useState('')
  const [inpMail, setInpMail] = useState('')
  const [inpPassword, setInpPassword] = useState('')

  useEffect(  () => {

  }, []);

  const envUsers = async () => {
    postUsers({name: inpName, age: inpAge, mail: inpMail, password: inpPassword})
  }

  return (
    <>
      <h1>Users List</h1>   
        {/* {users.map((user) => ( //Este es para apis con un objeto dentro de un array.
          <div key={user.id}>
            <h2>id: {user.id}</h2>
            <h2>name: {user.name}</h2>
            <h2>age: {user.age}</h2>
          </div>
        ))} */}
        <h1>Toys List</h1>
      <div>
        {/* {toys.map((toy) => ( //Este es para apis con solo arrays.
          <div key={toy}>
            <div id='toy'>{toy}</div>
          </div>
        ))} */}
      </div>
      {/* <input type="text" value={newToy}  onChange={(e) => setNewToy(e.target.value)} placeholder="Enter a new toy" /> */}
      
      <div>
        <input type="text" value={inpName}  onChange={(e) => setInpName(e.target.value)} placeholder="NAME" />
        <input type="text" value={inpAge}  onChange={(e) => setInpAge(e.target.value)} placeholder="AGE" />
        <input type="text" value={inpMail}  onChange={(e) => setInpMail(e.target.value)} placeholder="MAIL" />
        <input type="text" value={inpPassword}  onChange={(e) => setInpPassword(e.target.value)} placeholder="PASSWORD" />
        <button onClick={() => envUsers()}>Add User</button>
      </div>
    </>
  );
};

export default DatosToys