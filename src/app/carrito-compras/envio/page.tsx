import type { Metadata } from "next";
import Image from "next/image";
import ShoppingCart from '../../shopping-cart';

export const metadata: Metadata = {
  title: "Datos de envío l Original Carranza",
  description: "Datos de envío l Original Carranza",
};

export default function shipping() {   
    return (
        <div className="py-10 sm:py-20 xl:py-28">
            <section className="container">
                <div className="flex flex-col gap-y-5">
                    <div className="flex xl:flex-row flex-col gap-x-10 justify-between">
                        {/* Datos */}
                        <div className="w-full xl:pb-0 pb-10">
                            <div className="flex gap-x-11 items-center">
                                <div className="flex items-center gap-x-2 opacity-40">
                                    <figure className="w-9 h-9 items-center flex justify-center rounded-full bg-oc-brown-1">
                                        <span className="text-white font-bold text-xl">
                                            1
                                        </span>
                                    </figure>
                                    <p className="text-oc-green-1 font-semibold text-xs sm:text-base xl:text-lg">
                                        Datos de cliente
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2">
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
                            <div className="pt-10 flex flex-col gap-y-10">
                                <p className="text-oc-green-1 font-bold text-lg">
                                    Envío por paquetería
                                </p>
                                <div className="pt-3">
                                    <div className="flex items-center mb-5">
                                        <input id="shipping-1" type="radio" value="" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
                                        <label className="block ms-2 font-medium text-oc-green-1">
                                            $200 por paquete
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-start gap-x-10">
                                    <a href="#" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                                        Volver
                                    </a>
                                    <a href="#" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                                        Pagar
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Producto */}
                        <ShoppingCart />
                    </div>
                </div>
            </section>
        </div>
    );
}