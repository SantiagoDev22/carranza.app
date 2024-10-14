"use client";

import React, { useState, useEffect } from "react";
import type { Metadata } from "next";
import ShoppingCart from "../../shopping-cart";
import { useRouter } from "next/router";

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
  // const router = useRouter();

  const metadata: Metadata = {
    title: "Datos de contacto l Original Carranza",
    description: "Datos de contacto l Original Carranza",
  };

  // validacion de formulario
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [states, setStates] = useState<State[]>([]); // Indicar el tipo de dato de states
  const [selectedState, setSelectedState] = useState<string | null>(null); // Tipo para selectedState
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]); // Tipo para municipalities
  const [selectedMunicipality, setSelectedMunicipality] = useState<string | null>(null); // Tipo para selectedMunicipality

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
      const selectedStateData = states.find((state) => state.name === selectedState);
      // Usar operador de encadenamiento opcional para acceder a municipalities
      setMunicipalities(selectedStateData?.municipalities || []); 
    } else {
      setMunicipalities([]);
    }
  }, [selectedState, states]);

  // validate Name
  const handleNameChange = (event: any) => {
    const name = event.target.value;
    const nameRegex = /^[a-zA-Z\sáéíóúüñÁÉÍÓÚÜÑ.,'-]+$/i;
    if(!nameRegex.test(name)){
      setNameError('El nombre solo puede contener letras, y algunos caracteres especiales.');
    }else{
      setNameError('');
    }
  };

  const handlePhoneChange = (event: any) => {
    const phone = event.target.value;
    const phoneRegex = /^[0-9]+$/;
    if(!phoneRegex.test(phone)){
      setPhoneError('El número de teléfono solo puede contener números.');
    }else{
      setPhoneError('');
    }
  };
  
  const handleEmailChange = (event: any) => {
    const email = event.target.value;
    // Validar email (formato básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Ingresa un email válido.');
    } else {
      setEmailError('');
    }
  };


  const handleStateChange = (event: any) => {
    setSelectedState(event.target.value);
  };

  const handleMunicipalityChange = (event: any) => {
    setSelectedMunicipality(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // obtener data del formulario
    const formData = {
      customer: event.target.customer.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      street: event.target.street.value,
      number: event.target.number.value,
      zip: event.target.zip.value,
      col: event.target.col.value,
      state: selectedState,
      municipality: selectedMunicipality,
    }

    if(formData){
      sessionStorage.setItem('customerData', JSON.stringify(formData));

      window.location.href = '/carrito-compras/envio';
    }
  };

  return (
    <div className="py-10 sm:py-20 xl:py-28">
      <section className="container">
        <form onSubmit={handleSubmit}>
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
                        maxLength={256}
                        required
                        onChange={handleNameChange} 
                      />
                      {/* Mostrar mensaje de error para el nombre */}
                      {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
                    </div>
                    <div className="flex gap-x-3 w-full">
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
                          maxLength={10}
                          minLength={10}
                          pattern="[0-9]*"
                          onChange={handlePhoneChange} 
                        />
                        {/* Mostrar mensaje de error para el teléfono */}
                        {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}
                      </div>
                      <div className="mb-5">
                        <label className="block mb-2 text-base font-medium text-oc-green-1">
                          Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          maxLength={256}
                          className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                          placeholder=""
                          required
                          onChange={handleEmailChange}
                        />
                        {/* Mostrar mensaje de error para el email */}
                        {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
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
                        type="tel"
                        id="zip"
                        name="zip"
                        maxLength={5}
                        minLength={5}
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
                          <option key={state.id} value={state.name} >{state.name}</option>
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
                          <option key={municipality.id} value={municipality.name} >{municipality.name}</option>
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
              <button
                type="submit"
                className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4"
              >
                Siguiente
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
