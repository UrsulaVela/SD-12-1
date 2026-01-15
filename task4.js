// Task 4: delUser(number)

import { getServerURL } from './task1.js';

export async function delUser(id) {
  const url = `${getServerURL()}/users/${id}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`Usuario con ID ${id} eliminado correctamente.`);
    } else {
      console.log(`No se pudo encontrar al usuario con ID ${id}.`);
    }
    
  } catch (error) {
    console.error("Error al intentar eliminar el usuario:", error);
  }
}