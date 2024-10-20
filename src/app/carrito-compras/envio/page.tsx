
import type { Metadata } from "next";
import ShippingForm from "@/components/shippingForm";
import { Suspense  } from "react";
import dynamic from "next/dynamic";

const ShoppingCartList = dynamic(() => import('@/app/shopping-cart'), {
    suspense: true
})

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
                            <ShippingForm/>
                        </div>
                        {/* Producto */}
                        <Suspense fallback={<div>Cargando Productos...</div>}>
                            <ShoppingCartList />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}