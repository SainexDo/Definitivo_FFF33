import { useEffect, useState } from 'react'
import { getToys } from '../server/Toys/Toys'

const DatosToys = () => {
  const [toys, setToys] = useState([])

  useEffect(() => {
    getDataToys()
  }, [])

  const getDataToys = async () => {
    const data = await getToys()
    setToys(data.toys)
  }

  return (
  <>
  <h2>PIPASA</h2>
    <h1>Toys</h1>
    {toys.map((toy, index) => (
        <p key={index}>{toy}</p>
    ))} 
  </>
)
}

export default DatosToys