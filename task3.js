// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from './task1.js';

export async function addUser(nombre, apellido, email) {
  const url = `${getServerURL()}/users`;

  const nuevoUsuario = {
    id: "6",
    Nombre: nombre,
    Apellido: apellido,
    email: email
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoUsuario)
    });

    const data = await response.json();
    console.log("Usuario agregado con éxito:", data);
    
  } catch (error) {
    console.error("Error al agregar el usuario:", error);
  }
}