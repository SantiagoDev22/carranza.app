/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Sobre Salud Capilar y la Importancia de los Productos Naturales en tu Rutina l Original Carranza",
  description: "Obtén información valiosa para mejorar tu salud integrando productos 100% naturales en tu día a día.",
};

export default function Blog() {   
    return (
        <div className="relative overflow-hidden">
            {/* Section hero */}
            <section className="relative min-h-[600px] sm:min-h-[900px] lg:min-h-[1195.78px] grid items-end bg-no-repeat bg-cover bg-center bg-hero-blog">
                <hgroup className="text-white text-center h-full relative z-20 flex flex-col justify-between py-10 sm:py-20 container">
                    <h1 className="text-3xl uppercase sm:text-4xl md:text-6xl font-semibold !leading-tight text-shadow">
                        El Mejor Tratamiento Capilar de México y Latinoamérica
                    </h1>
                    <div className="flex flex-col gap-y-3">
                        <div className="w-full h-[0.01rem] bg-white"></div>
                        <h2 className="text-xl sm:text-3xl font-bold text-shadow-sm uppercase">
                            Únete a nuestra comunidad y descarga ahora gratis nuestra revista de Original Carranza con detalles e información relevante sobre el Détox Capilar.
                        </h2>
                    </div>
                </hgroup>
            </section>

            {/* Button Download */}
            <div className="flex justify-center py-20">
                <a href="#" className="text-black text-2xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                    Quiero Descargar
                </a>
            </div>

            {/* Article */}
            <section className="pb-5">
                <div className="container">
                    <article>
                        <figure className="flex justify-center">
                            <Image alt="Blog Image" src="/images/website/blog/blog.webp" width="1000" height="708" />
                        </figure>
                        <hgroup className="py-12">
                            <h3 className="text-4xl  sm:text-5xl uppercase font-semibold text-oc-green-1 text-center">
                                Importancia de Integrarel Saw Palmetto en tu Dieta
                            </h3>
                        </hgroup>
                        <div className="flex flex-col gap-y-4 sm:max-w-[40rem] m-auto">
                            
                            <p className="text-left pb-6 text-2xl text-oc-green-1 font-bold">
                                El Saw Palmetto es un aliado fundamental en la salud prostática, ofreciendo un tratamiento natural y efectivo. Este extracto herbal beneficia la próstata, especialmente en el tratamiento de la hiperplasia benigna y otros trastornos prostáticos.
                            </p>
                            <div className="flex flex-col gap-y-4 text-left">
                                <p className="text-xl text-white bg-oc-brown-1 font-bold py-1 px-5">
                                    Inhibe el DHT y mejora en la función de la próstata
                                </p>
                                <p className="text-oc-green-1 text-lg">
                                    El Saw Palmetto interviene en dos mecanismos clave para mejorar la salud prostática:
                                    <br /><br />
                                    <strong>Primero:</strong> reduce la concentración de dihidrotestosterona (DHT), un desencadenante principal de la hiperplasia benigna de próstata (HBP).
                                    <br /><br />
                                    <strong>Segundo:</strong> actúa sobre los tejidos prostáticos, inhibiendo procesos que causan contracción y dificultad en la micción.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <p className="text-xl text-white bg-oc-brown-1 font-bold py-1 px-5">
                                    Facilita el flujo urinario
                                </p>
                                <p className="text-oc-green-1 text-lg">
                                    La Tamsulosina es un medicamento ampliamente recetado para abordar los síntomas del tracto urinario inferior (LUTS) causados por la hiperplasia benigna de próstata (HBP).
                                    <br /><br />
                                    Su efectividad reside en bloquear los receptores adrenérgicos alfa-1, lo que previene la contracción no deseada del tejido prostático y facilita el flujo urinario.                                   
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center py-20">
                            <a href="#" className="text-black text-2xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                                Leer Más
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            {/* Divider */}
            <div className="py-2 bg-oc-green-1 relative z-20"></div>
    
            {/* Figure Left */}
            <figure className="absolute -left-[4.5rem] sm:left-0 -top-12">
                <Image
                    src="/images/website/components/figure-l.webp"
                    alt="Figura"
                    width={100}
                    height={100}
                    className="w-full"
                />     
            </figure>
    
            {/* Figure Right */}
            <figure className="absolute -right-28 sm:-right-1 -top-2">
                <Image
                    src="/images/website/components/figure-r.webp"
                    alt="Figura"
                    width={100}
                    height={100}
                    className="w-full"
                />     
            </figure>
        </div>
    );
}