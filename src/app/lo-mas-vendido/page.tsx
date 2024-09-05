import type { Metadata } from "next";
import Image from "next/image";
import Banner from "../banner";

export const metadata: Metadata = {
  title: "Los Más Vendidos l Original Carranza",
  description: "Tratamiento para el cuidado de la salud capilar y en general para el cuerpo con productos 100% naturales.",
};

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
        </main>
    );
}