import axios from 'axios';

const url = 'http://localhost:8000/api/toys/';

const getToys = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};

const createToy = async (data) => {
  try {
    const response = await axios.post(url, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
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

export { getToys, createToy, updateToy, deleteToy };