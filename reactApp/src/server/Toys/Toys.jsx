import axios from 'axios';

// const url = 'http://localhost:8000/api/toys/';

// const getDataToys = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.toys // Hay que traer de una vez el nombre del array, PERROS!!!
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////////////

const postToys = async (data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Convertimos el objeto `data` a JSON
    });
    
    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }

    const newData = await response.json();
    console.log(newData);
  } catch (error) {
    alert('ERROR POST');
    console.error(error); // Para obtener más detalles del error en la consola
  }
};


///////////////////////////////////////////////////////////////////////////////////////////

const updateToy = async (id, data) => {
  try {
    const response = await axios.put(url + id, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


const deleteToy = async (id) => {
  try {
    const response = await axios.delete(url + id);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { postToys, updateToy, deleteToy };