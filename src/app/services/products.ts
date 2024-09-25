// "use client";

import axios from "axios";
import { Productos } from "./types/Productos";

const api_url = 'http://127.0.0.1:8000/api' //process.env.API_URL;
const api_token = '3tuK0UCMWImeSoYNpD9c6dWyF5RGUDoI' // process.env.API_TOKEN;

// function to get all products
export const getProducts = async (): Promise<{ data: Productos[] }> => {
  try {
    const response = await axios.get(`${api_url}/products?domain=originalcarranza.com&page=1`, {
      headers: {
        'App-Token': `${api_token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error; // Puedes manejar el error de otra manera si lo prefieres
  }
};