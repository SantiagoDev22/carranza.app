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

  const [states, setStates] = useState<State[]>([]); // Indicar el tipo de dato de states
  const [selectedState, setSelectedState] = useState<string | null>(null); // Tipo para selectedState
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]); // Tipo para municipalities
  const [selectedMunicipality, setSelectedMunicipality] = useState<string | null>(null); // Tipo para selectedMunicipality

  const [isLoading, setIsLoading] = useState(false);

  // validacion de formulario
  // Estado para el formulario y los errores
  const [formData, setFormData] = useState({
    customer: '',
    phone: '',
    email: '',
    street: '',
    number: '',
    zip: '',
    col: '',
    state: '', 
    municipality: ''
  });

  const [errors, setErrors] = useState({
    customer: '',
    phone: '',
    email: '',
    street: '',
    number: '',
    zip: '',
    col: '',
    state: '', 
    municipality: '' 
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/js/db/states.json');
      const data: State[] = await response.json(); 
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'customer':
        const nameRegex = /^[a-zA-Z\sáéíóúüñÁÉÍÓÚÜÑ.,'-]+$/i;
        errorMessage = !nameRegex.test(value) ? 'El nombre solo puede contener letras y algunos caracteres especiales.' : '';
        break;
      case 'phone':
        const phoneRegex = /^[0-9]+$/;
        errorMessage = !phoneRegex.test(value) ? 'El número de teléfono solo puede contener números.' : '';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !emailRegex.test(value) ? 'Ingresa un email válido.' : '';
        break;
      case 'zip':
        const zipRegex = /^[0-9]+$/;
        errorMessage = !zipRegex.test(value) ? 'El código postal solo puede contener números.' : '';
        break;
      // ... Validaciones para otros campos ... 
      default:
        break;
    }

    setErrors({ ...errors, [fieldName]: errorMessage });
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validar todos los campos antes de enviar
    let isValid = true;
    for (const fieldName in formData) {
      // Asegurar que fieldName sea una llave válida 
      if (Object.prototype.hasOwnProperty.call(formData, fieldName)) { // Verificar que la propiedad exista en el objeto
        const key = fieldName as keyof typeof formData; // Asegurar que fieldName sea una llave válida de formData
        validateField(key, formData[key]); 
        if (errors[key]) { 
          isValid = false;
        }
      }
    }

    if (isValid) {
      setIsLoading(true);
      sessionStorage.setItem('customerData', JSON.stringify(formData));
      console.log('Formulario válido:', formData);

      // Redirigir a la página de envío con router.push
      setTimeout(() => {
        window.location.href = '/carrito-compras/envio';
      },1200);
      // router.push('/carrito-compras/envio'); 
    } else {
      console.log('Formulario inválido');
    }
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    const { name, value} = event.target;
    setFormData({...formData, [name]:value});
  };

  const handleMunicipalityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMunicipality(event.target.value);
    const { name, value} = event.target;
    setFormData({...formData, [name]: value});

  }

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
                        value={formData.customer}
                        onChange={handleChange} 
                      />
                      {/* Mostrar mensaje de error para el nombre */}
                      {errors.customer && <p className="text-red-500 text-xs">{errors.customer}</p>}
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
                          maxLength={10}
                          minLength={10}
                          required
                          pattern="[0-9]*"
                          value={formData.phone}
                          onChange={handleChange} 
                        />
                        {/* Mostrar mensaje de error para el teléfono */}
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
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
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {/* Mostrar mensaje de error para el email */}
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
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
                        value={formData.street}
                        onChange={handleChange}
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
                        value={formData.number}
                        onChange={handleChange}
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
                        value={formData.zip}
                        onChange={handleChange}
                      />
                      {/* Mostrar mensaje de error para el código postal */}
                      {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}
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
                        value={formData.col}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-5">
                      <select
                        name="state"
                        id="state"
                        className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        defaultValue={selectedState || ''}
                        onChange={handleStateChange} 
                      >
                        <option disabled value={''}>Selecciona un Estado</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.name} >{state.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-5">
                      <select
                        name="municipality"
                        id="municipality"
                        className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        defaultValue={selectedMunicipality || ''}
                        onChange={handleMunicipalityChange}
                      >
                        <option disabled value={''}>Selecciona un Municipio</option>
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
                className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                <svg aria-hidden="true" role="status" className={`${isLoading ? '' : 'hidden'} inline w-4 h-4 me-3 text-oc-brown-1 animate-spin`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg> 
                Siguiente
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
