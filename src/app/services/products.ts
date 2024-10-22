// "use client";
import * as dotenv from 'dotenv' 
dotenv.config();

import axios from "axios";
import { Productos } from "./types/Productos";

const api_url = process.env.NEXT_PUBLIC_API_URL;
const api_token = process.env.NEXT_PUBLIC_API_TOKEN;

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

export const getProductBySlug = async (slug: string): Promise<Productos | null> => {
  try {
    const response = await axios.get(`${api_url}/products/${slug}?domain=originalcarranza.com`, {
      headers: {
        'App-Token': `${api_token}`
      }
    });
    
    
    return response.data;
  }catch (error: any){

    if(error.response){
      if(error.response.status === 404){
        return null;
        
      }
    }
    throw error; // Puedes manejar el error de otra manera si lo prefieres
  }
}