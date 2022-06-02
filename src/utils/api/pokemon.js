import { API_HOST } from "../constants";

export async function getPokemonsApi(endpoint) {
  try {
    const response = await fetch(endpoint || `${API_HOST}/pokemon?limit=20&offset=0`);
    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
}
