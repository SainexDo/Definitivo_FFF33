import { useEffect, useState } from 'react'
import { getDataToys } from '../server/Toys/Toys'
// import { Post } from '../server/Toys/Toys'

const DatosToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(  () => {
    mostrar()
  }, []);

  const mostrar = async () => {
    const data = await getDataToys()
    setToys(data)
  }



  return (
    <div>
      <h1>Toys List</h1>
        {toys.map((toy) => (
          <div key={toy.id}>
            <h2>Id:  {toy.id}</h2>
            <h2>Name: {toy.name}</h2>
            <h2>Age: {toy.age}</h2>
          </div>
        ))}
    </div>
  );
};

export default DatosToys