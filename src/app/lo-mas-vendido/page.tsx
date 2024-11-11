
import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const ProductsList = dynamic(() => import('@/components/productsItems'), {
    suspense: true
});


export const metadata: Metadata = {
  title: "Los Más Vendidos l Original Carranza",
  description: "Tratamiento para el cuidado de la salud capilar y en general para el cuerpo con productos 100% naturales.",
};

export default function Market() {
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
                    <Suspense fallback={<div>Cargando Productos...</div>}>
                        <ProductsList />
                    </Suspense>
                </div>
            </div>
            
            {/* Divider */}
            <div className="py-2 bg-oc-green-1 relative z-20"></div>
        </div>
    );
}