'use client'

import { useState, useEffect } from 'react';
import { getProducts } from '../services/products'
import Link from "next/link";

function Productos() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProductsData(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        // Manejar el error aquí (mostrar un mensaje al usuario, etc.)
      }
    };

    fetchProducts();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (!productsData.length) { // Mostrar un mensaje de carga mientras se obtienen los datos
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productsData.map(producto => (
        <Link href={`/tienda/producto/${producto.id}`} key={producto.id}>
          <div className="border rounded-md p-4 shadow-md">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-gray-600">${producto.precio}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function market() {
  return (
      <main>
          <div className="container">
              <hgroup>
                  <h1 className="text-center font-bold">
                      Productos
                  </h1>
              </hgroup>
          </div>
          <Productos/>
      </main>
  );
}