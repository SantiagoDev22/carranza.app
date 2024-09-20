"use client";

import { useState, useEffect } from "react";
import { getProducts } from "../services/products";
import Link from "next/link";

function Productos() {
  const [productsData, setProductsData] = useState<Productos[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProductsData(data.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        // Manejar el error aquí (mostrar un mensaje al usuario, etc.)
      }
    };

    fetchProducts();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (!productsData.length) {
    // Mostrar un mensaje de carga mientras se obtienen los datos
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productsData.map((producto: Productos) => (
        <Link href={`/tienda/producto/${producto.slug}`} key={producto.id}>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="overflow-hidden rounded">
              <img
                className="mx-auto h-44 w-44 dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="imac image"
              />
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </div>
            <div>
              <div className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                {producto.title}
              </div>
              <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                {producto.description}
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                <span className="line-through"> ${producto['precio']}</span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
                style={{
                  position: "absolute",
                  inset: "auto auto 0px 0px",
                  margin: "0px",
                  transform: "translate(55.873px, -139.175px)",
                }} 
              >
                Add to favourites
                <div
                  className="tooltip-arrow"
                  data-popper-arrow=""
                  style={{
                    position: "absolute",
                    left: "0px",
                    transform: "translate(65.0159px, 0px)",
                  }}
                ></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>
          {/* <div className="border rounded-md p-4 shadow-md">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
              <h2 className="text-lg font-semibold">{producto.nombre}</h2>
              <p className="text-gray-600">${producto.precio}</p>
            </div> */}
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
          <h1 className="text-center font-bold">Productos</h1>
        </hgroup>
        <Productos />
      </div>
    </main>
  );
}
