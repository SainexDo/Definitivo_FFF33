import axios from 'axios';

const url = 'http://localhost:8000/api/toys/';

const getDataToys = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.users // Hay que traer de una vez el nombre del array, PERROS!!!
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////

const Post = async (data) => {
  fetch(url, {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify()
})
.then(response => response.json(toys))
.then(data => {
})
.catch(error => {
    alert('ERROR POST')
});
};

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

export { getDataToys, Post, updateToy, deleteToy };