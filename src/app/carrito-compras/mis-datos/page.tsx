import type { Metadata } from "next";
import Image from "next/image";
import ShoppingCart from '../../shopping-cart';
import { useState } from "react";

export const metadata: Metadata = {
  title: "Datos de contacto l Original Carranza",
  description: "Datos de contacto l Original Carranza",
};

export default function data() { 
    
    const [name, setNombre] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [col, setCol] = useState("");
    const [zip, setZip] = useState("");
    const [state, setState] = useState("");
    const [municipality, setMunicipality] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(!name || !phone || !email){
            alert("Por favor, completa todos los campos requeridos");
            return;
        }

        sessionStorage.setItem("name", name);

        console.log("Datos Guardados 200:: ", name);
    }
    
    return (
        <div className="py-10 sm:py-20 xl:py-28">
            <section className="container">
                <div className="flex flex-col gap-y-5">
                    {/* form */}
                    <form onSubmit={handleSubmit}>
                    <div className="flex xl:flex-row flex-col gap-x-10 justify-between">
                        <div className="w-full">
                            <div className="flex gap-x-11 items-center">
                                <div className="flex items-center gap-x-2">
                                    <figure className="w-9 h-9 items-center flex justify-center rounded-full bg-oc-brown-1">
                                        <span className="text-white font-bold text-xl">
                                            1
                                        </span>
                                    </figure>
                                    <p className="text-oc-green-1 font-semibold text-xs sm:text-base xl:text-lg">
                                        Datos de cliente
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2 opacity-40">
                                    <figure className="w-9 h-9 items-center flex justify-center rounded-full bg-oc-brown-1">
                                        <span className="text-white font-bold text-xl">
                                            2
                                        </span>
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
                                        <label className="block mb-2 text-base font-medium text-oc-green-1">Nombre completo</label>
                                        <input type="text" name="name" id="name" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
                                    </div>
                                    <div className="flex gap-x-3">
                                        <div className="mb-5">
                                            <label className="block mb-2 text-base font-medium text-oc-green-1">Teléfono</label>
                                            <input type="tel" name="phone" id="phone" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block mb-2 text-base font-medium text-oc-green-1">Mail</label>
                                            <input type="email" name="email" id="email" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
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
                                        <label className="block mb-2 text-base font-medium text-oc-green-1">Calle</label>
                                        <input type="text" name="street" id="street" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-base font-medium text-oc-green-1">Número</label>
                                        <input type="text" name="number" id="number" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-base font-medium text-oc-green-1">Colonia</label>
                                        <input type="text" name="col" id="col" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2 text-base font-medium text-oc-green-1">Código Postal</label>
                                        <input type="number" name="zip" id="zip" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white" placeholder="" required />
                                    </div>
                                    <div className="mb-5">
                                        <select name="state" id="state" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white">
                                            <option disabled selected>Selecciona un Estado</option>
                                        </select>
                                    </div>
                                    <div className="mb-5">
                                        <select name="municipality" id="municipality" className="border border-gray-300 text-oc-green-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white">
                                            <option disabled selected>Selecciona un Municipio</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Producto */}
                        <ShoppingCart />
                    </div>
                    <div className="flex justify-center gap-x-10">
                        <a href="/" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                            Volver
                        </a>
                        <button type="submit" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                            Siguiente
                        </button>
                    </div>
                    </form>
                    {/* Form */}
                </div>
            </section>
        </div>
    );
}