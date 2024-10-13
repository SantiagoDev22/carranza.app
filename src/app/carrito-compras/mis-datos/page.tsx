'use client';

import React, { useState, useEffect } from "react";
import type { Metadata } from "next";
import ShoppingCart from "../../shopping-cart";

// Definir la interfaz para los estados y municipios
interface Municipality {
  id: number;
  name: string;
}

interface State {
  id: number;
  name: string;
  municipalities: Municipality[];
}

export default function data() {
  const metadata: Metadata = {
    title: "Datos de contacto l Original Carranza",
    description: "Datos de contacto l Original Carranza",
  };


  const [states, setStates] = useState<State[]>([]); // Indicar el tipo de dato de states
  const [selectedState, setSelectedState] = useState<number | null>(null); // Tipo para selectedState
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]); // Tipo para municipalities
  const [selectedMunicipality, setSelectedMunicipality] = useState<number | null>(null); // Tipo para selectedMunicipality

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/js/db/states.json');
      const data: State[] = await response.json(); // Indicar el tipo de dato esperado
      setStates(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const selectedStateData = states.find((state) => state.id === selectedState);
      // Usar operador de encadenamiento opcional para acceder a municipalities
      setMunicipalities(selectedStateData?.municipalities || []); 
    } else {
      setMunicipalities([]);
    }
  }, [selectedState, states]);


  const handleStateChange = (event: any) => {
    setSelectedState(parseInt(event.target.value, 10));
  };

  const handleMunicipalityChange = (event: any) => {
    setSelectedMunicipality(parseInt(event.target.value, 10));
  }

  return (
    <div className="py-10 sm:py-20 xl:py-28">
      <section className="container">
        <div className="flex flex-col gap-y-5">
          <div className="flex xl:flex-row flex-col gap-x-10 justify-between">
            {/* Datos */}
            <div className="w-8/12">
              <div className="flex gap-x-11 items-center">
                <div className="flex items-center gap-x-2">
                  <figure className="w-9 h-9 items-center flex justify-center rounded-full bg-oc-brown-1">
                    <span className="text-white font-bold text-xl">1</span>
                  </figure>
                  <p className="text-oc-green-1 font-semibold text-xs sm:text-base xl:text-lg">
                    Datos de cliente
                  </p>
                </div>
                <div className="flex items-center gap-x-2 opacity-40">
                  <figure className="w-9 h-9 items-center flex justify-center rounded-full bg-oc-brown-1">
                    <span className="text-white font-bold text-xl">2</span>
                  </figure>
                  <p className="text-oc-green-1 font-semibold text-xs sm:text-base xl:text-lg">
                    Paquetería
                  </p>
                </div>
              </div>
              {/* Contacto */}
              <div className="pt-10">
                <p className="text-oc-green-1 font-bold text-lg">
                  Información de contacto
                </p>
                <div className="pt-3">
                  <div className="mb-5">
                    <label className="block mb-2 text-base font-medium text-oc-green-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="customer"
                      name="customer"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="flex gap-x-3">
                    <div className="mb-5">
                      <label className="block mb-2 text-base font-medium text-oc-green-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        placeholder=""
                        required
                        maxLength={15}
                        minLength={10}
                        pattern="[0-9]*"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 text-base font-medium text-oc-green-1">
                        Mail
                      </label>
                      <input
                        type="email"
                        id="name"
                        name="email"
                        className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Envío */}
              <div className="pt-8">
                <p className="text-oc-green-1 font-bold text-lg">
                  Dirección de envío
                </p>
                <div className="pt-3 grid grid-cols-2 gap-3">
                  <div className="mb-5">
                    <label className="block mb-2 text-base font-medium text-oc-green-1">
                      Calle
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-base font-medium text-oc-green-1">
                      Número
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-base font-medium text-oc-green-1">
                      Código Postal
                    </label>
                    <input
                      type="number"
                      id="zip"
                      name="zip"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-base font-medium text-oc-green-1">
                      Colonia
                    </label>
                    <input
                      type="text"
                      id="col"
                      name="col"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <select
                      name="states"
                      id="states"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      onChange={handleStateChange} value={selectedState || 0}
                    >
                      <option disabled value={0}>Selecciona un Estado</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.id} >{state.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <select
                      name="municipio"
                      id="municipio"
                      className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                      value={selectedMunicipality || 0}
                      onChange={handleMunicipalityChange}
                    >
                      <option disabled value={0}>Selecciona un Municipio</option>
                      {municipalities.map((municipality) => (
                        <option key={municipality.id} value={municipality.id} >{municipality.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Producto */}
            <ShoppingCart />
          </div>
          <div className="flex justify-center gap-x-10">
            <a
              href="/"
              className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4"
            >
              Volver
            </a>
            <a
              href="#"
              className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4"
            >
              Siguiente
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
