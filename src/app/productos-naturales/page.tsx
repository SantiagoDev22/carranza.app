import type { Metadata } from "next";
import Image from "next/image";
import Banner from "../banner";

export const metadata: Metadata = {
  title: "Productos Naturales de Uso Preventivo y Curativo l Original Carranza",
  description: "Tratamientos ideales para casos simples y extremos en alopecia, caída de cabello, caspa y seborrea.",
};

export default function work() {   
    return (
        <main>
            <div className="container">
                <hgroup>
                    <h1 className="text-center font-bold">
                        ¿Cómo funciona?
                    </h1>
                </hgroup>
            </div>
        </main>
    );
}