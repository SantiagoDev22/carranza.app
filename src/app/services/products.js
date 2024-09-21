import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api';
const API_TOKEN = '3tuK0UCMWImeSoYNpD9c6dWyF5RGUDoI';

// function to get all products
export const getProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products?domain=develogy.mx&page=1`, {
        headers: {
          'App-Token': `${API_TOKEN}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error; // Puedes manejar el error de otra manera si lo prefieres
    }
  };