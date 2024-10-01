import Image from "next/image";
import Banner from "../app/banner";
import Certifications from "../app/certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y Tratamientos 100% Naturales l Original Carranza",
  description: "Somos una empresa mexicana dedicada a la elaboración y distribución de tratamientos capilares 100% artesanales a base de herbolaria orgánica.",
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Section hero */}
      <section className="mx-5 sm:mx-14 relative mt-8 sm:mt-16 min-h-[600px] sm:min-h-[900px] lg:min-h-[1195.78px] grid items-end bg-no-repeat bg-cover bg-center bg-hero">
        <div className="absolute inset-0 z-10 bg-gradient-black-esp lg:bg-gradient-black"></div>
        <hgroup className="text-white text-center relative z-20 flex flex-col gap-y-9 mb-10 lg:mx-0 mx-5 sm:mx-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-[0.9] text-shadow">
            TRATAMIENTO CAPILAR <br />
            <span className="text-2xl sm:text-4xl">
            PARA LA CAÍDA DE CABELLO
            </span>
          </h1>
          <h2 className="text-2xl text-shadow-sm">
            Productos para el cuidado del cabello, barba y la salud.
          </h2>
        </hgroup>
      </section>

      {/* Section banner */}
      <section className="pt-16 relative z-20">
        <div className="container">
          <hgroup className="pb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-oc-green-1 text-center uppercase">
              Lo buscan nuestros clientes
            </h2>
          </hgroup>
          < Banner />
        </div>
      </section>

      {/* Section products */}
      <section className="pt-14 relative z-20">
        <div className="container">
          <div className="flex flex-col gap-y-20">
            <div className="flex flex-col-reverse gap-y-10 xl:grid grid-cols-2 items-center gap-x-24 2xl:gap-x-36">
                <picture>
                  <Image
                      src="/images/website/home/1.webp"
                      alt="Shampoo"
                      width={700}
                      height={700}
                  />     
                </picture>
                <div className="flex flex-col gap-y-5">
                  <h3 className="text-white bg-oc-brown-1 text-3xl md:text-5xl py-2 font-semibold uppercase text-center w-full xl:w-[78%] 2xl:w-[63%]">
                    Shampoo
                  </h3>
                  <p className="text-lg text-justify">
                    Con ingredientes 100% naturales. Nuestro Shampoo se aplica en el cuero cabelludo dando un suave masaje con la yema de los dedos y posteriormente se deja reposar un par de minutos. Nutre el folículo con proteínas para darle fuerza y recuperar tu cabello.
                  </p>
                  <div className="flex justify-center xl:justify-start">
                    <a href="/lo-mas-vendido" className="text-black text-lg hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                      Comprar
                    </a>
                  </div>
                </div>
            </div>
            <div className="gap-y-10 grid xl:grid-cols-2 items-center gap-x-24 2xl:gap-x-36">
                <div className="flex flex-col gap-y-5">
                  <h3 className="text-white bg-oc-green-1 text-3xl md:text-5xl py-2 font-semibold uppercase text-center w-full xl:w-[58%] 2xl:w-[50%]">
                    Tónico
                  </h3>
                  <p className="text-lg text-justify">
                    Usarlo es perfecto si quieres que tu cabello crezca. Promueve una gran aceleración en el crecimiento del cabello, donde nuestro Tónico Capilar ha sido puesto a prueba y ha logrado comprobar su gran funcionalidad. Este producto está diseñado especialmente para acelerar el crecimiento del cabello en zonas despobladas, y para que crezca más rápido.
                  </p>
                  <div className="flex justify-center xl:justify-start">
                    <a href="/lo-mas-vendido" className="text-black text-lg hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                      Comprar
                    </a>
                  </div>
                </div>
                <picture>
                  <Image
                      src="/images/website/home/2.webp"
                      alt="Tónico"
                      width={700}
                      height={700}
                  />     
                </picture>
            </div>
            <div className="flex flex-col-reverse gap-y-10 xl:grid grid-cols-2 items-center gap-x-24 2xl:gap-x-36">
                <picture>
                  <Image
                      src="/images/website/home/3.webp"
                      alt="Saw Palmetto"
                      width={700}
                      height={700}
                  />     
                </picture>
                <div className="flex flex-col gap-y-5">
                  <h3 className="text-white bg-oc-brown-1 text-3xl md:text-5xl py-2 font-semibold uppercase text-center w-full 2xl:w-[92%]">
                    Saw Palmetto
                  </h3>
                  <p className="text-lg text-justify">
                    Este suplemento es perfecto para mejorar tu salud capilar, ya que logra aumentar su crecimiento y volumen, siendo muy útil para las personas que sufren de calvicie. Está hecho para equilibrar las hormonas que ayudan a disminuir la caída del cabello.
                  </p>
                  <div className="flex justify-center xl:justify-start">
                    <a href="/lo-mas-vendido" className="text-black text-lg hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                      Comprar
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Hair */}
      <section className="pt-20 relative z-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-14">
            <div className="flex flex-col gap-y-7">
              <figure>
                <Image
                    src="/images/website/home/men.webp"
                    alt="Cabello de hombre"
                    width={700}
                    height={700}
                />
              </figure>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-center text-xl lg:text-2xl xl:text-3xl">
                  Ideal para Hombres
                </h4>
                <div className="flex justify-center">
                  <a href="/lo-mas-vendido" className="text-black text-lg hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                    Comprar ahora
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <figure>
                <Image
                    src="/images/website/home/woman.webp"
                    alt="Cabello de mujer"
                    width={700}
                    height={700}
                />
              </figure>
              <div className="flex flex-col gap-y-4">
                <h4 className="text-center text-xl lg:text-2xl xl:text-3xl">
                  Perfecto para Mujeres
                </h4>
                <div className="flex justify-center">
                  <a href="/lo-mas-vendido" className="text-black text-lg hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                    Comprar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      <section className="py-20 xl:py-32 relative z-20">
        <div className="container">
            <Certifications />
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
