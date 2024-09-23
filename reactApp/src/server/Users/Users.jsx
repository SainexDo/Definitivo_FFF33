const url = 'http://localhost:8000/api/users/';

const getDataUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.users // Hay que traer de una vez el nombre del array, PERROS!!!
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//////////////////////////////////////////////////////////////////////////////

const postUsers = async (newUser) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // Asegúrate de este encabezado
      },
      body: JSON.stringify({ name: newUser.name, age: newUser.age, mail: newUser.mail, password: newUser.password }),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('ERROR POST:', error);
  }
};

export { getDataUsers, postUsers }
