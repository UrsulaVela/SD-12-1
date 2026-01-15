// Task 2: listUsers()

import { getServerURL } from './task1.js';

export async function listUsers() {
  try {

    const url = `${getServerURL()}/users`;

    const response = await fetch(url);

    const users = await response.json();

    console.log(users);
    
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}