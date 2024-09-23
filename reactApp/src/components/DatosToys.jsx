import { useEffect, useState } from 'react'
import { getDataUsers } from '../server/Users/Users';
import { postUsers } from '../server/Users/Users';

const DatosToys = () => {
  const [toys, setToys] = useState([]);
  const [users, setUsers] = useState([]);
  const [newToy, setNewToy] = useState('');
  const [inpName, setInpName] = useState('')
  const [inpAge, setInpAge] = useState('')
  const [inpMail, setInpMail] = useState('')
  const [inpPassword, setInpPassword] = useState('')

  useEffect(() => {
    mostrar()
  }, []);

  const envUsers = async () => {
    postUsers({name: inpName, age: inpAge, mail: inpMail, password: inpPassword})
  }

  const mostrar = async () => {
    const data = await getDataUsers();
    setUsers(data) 
  }

  return (
    <>
      <h1>Users List</h1>   
      <div id='containerUserCards'>
        {users.map((user) => ( //Este es para apis con un objeto dentro de un array.
            <div id='userCard' key={user.id}>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>age: {user.age}</div>
            <div>mail: {user.mail}</div>
            <div>password: {user.password}</div>
          </div>
        ))}
      </div>
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