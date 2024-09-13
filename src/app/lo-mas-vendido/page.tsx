import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Los Más Vendidos l Original Carranza",
  description: "Tratamiento para el cuidado de la salud capilar y en general para el cuerpo con productos 100% naturales.",
};

export default function market() {   
    return (
        <div>
            <div className="pt-20 pb-20 xl:pb-40">
                <div className="container">
                    <hgroup className="flex flex-col gap-y-7">
                        <h1 className="text-center font-bold text-4xl sm:text-5xl text-oc-green-1">
                            Tienda en Línea de Productos Naturales
                        </h1>
                        <h2 className="text-center text-oc-green-1 text-2xl sm:text-3xl font-bold">
                            Explora nuestra amplia variedad en productos con <br className="lg:block hidden" />
                            ingredientes naturales y tratamiento capilar.
                        </h2>
                    </hgroup>
                    <div className="pt-20 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-8">
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/shampoo.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Shampoo
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $400
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/tonico.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Tónico
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $400
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/saw.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Saw Palmetto
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $450
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/desodorante.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Desodorante
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $210
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/pasta.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Pasta de Dientes
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $180
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/acido.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Ácido Hialurónico
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $750
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/colageno.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Colágeno
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $550
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2">
                            <a href="/lo-mas-vendido/producto" className="hover:brightness-90 transition flex justify-center">
                                <Image
                                    src="/images/website/tienda/keratina.png"
                                    alt="Producto"
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <div className="flex flex-col">
                                <p className="text-oc-green-1 text-lg font-semibold">
                                    Keratina
                                </p>
                                <p className="text-oc-brown-1 text-2xl font-bold ">
                                    $250
                                </p>
                            </div>
                            <div className="flex gap-x-2 pt-2">
                                <ul className="border border-oc-green-2 rounded-3xl flex">
                                    <li className="border-r border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            -
                                        </a> 
                                    </li>
                                    <li className="px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                            1
                                        </a> 
                                    </li>
                                    <li className="border-l border-oc-green-2 px-4 py-1">
                                    <a href="#" className="text-oc-green-1 font-medium text-lg">
                                            +
                                        </a> 
                                    </li>
                                </ul>
                                <a href="#" className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                                    Agregar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Divider */}
            <div className="py-2 bg-oc-green-1 relative z-20"></div>
        </div>
    );
}