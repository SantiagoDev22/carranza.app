import type { Metadata } from "next";
import Image from "next/image";
import Banner from "../banner";
import Certifications from "../certifications";

export const metadata: Metadata = {
  title: "Productos Naturales de Uso Preventivo y Curativo l Original Carranza",
  description: "Tratamientos ideales para casos simples y extremos en alopecia, caída de cabello, caspa y seborrea.",
};

export default function Work() {   
    return (
        <main>
            {/* Section one */}
            <section className="py-20">
                <div className="container">
                    <hgroup className="text-oc-green-1 text-center relative z-20 flex flex-col gap-y-9 mb-10 lg:mx-0 mx-5 sm:mx-10">
                        <h1 className="text-3xl sm:text-4xl uppercase md:text-6xl font-bold leading-[0.9]">
                            Tratamiento Capilar de 
                            Uso <span className="text-oc-brown-1">Fácil</span> y <span className="text-oc-brown-1">Rápido</span>
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <figure className="h-32 sm:h-64 w-[0.1rem] bg-oc-green-1"></figure>
                            <figure className="bg-oc-green-1 w-1 h-1 rounded-full"></figure>
                        </div>
                        <h2 className="text-xl sm:text-2xl text-oc-green-1 font-bold">
                            INTEGRA EL DÉTOX CAPILAR DE ORIGINAL CARRANZA <br />
                            DE FORMA SENCILLA EN RUTINA DIARIA CON UNA APLICACIÓN SENCILLA
                        </h2>
                    </hgroup>
                </div>
            </section>
            {/* Section two */}
            <section className="bg-hero-funciona shadow-xl grid place-content-center bg-center bg-no-repeat bg-cover min-h-[600px] sm:min-h-[800px]">
                <div className="container">
                    <div className="flex flex-col gap-y-10 sm:gap-y-20">
                        <h2 className="uppercase max-w-[23rem] text-center text-xl sm:text-3xl font-bold text-white">
                            TU TRATAMIENTO CAPILAR INCLUYE UNA GARANTÍA <span className="text-oc-brown-1">DEL 100%</span>
                        </h2>
                        <div className="flex justify-center">
                            <a href="/preguntas-frecuentes" className="text-white text-lg hover:text-white hover:bg-oc-brown-1 transition bg-transparent border border-oc-brown-1 py-2 px-4">
                                Conoce tu garantía
                            </a>
                        </div>
                        <p className="text-center text-sm text-white">
                            Tu Détox Capilar es sencillo de usar, solo <br />
                            debes seguir estos 3 pasos:
                        </p>
                    </div>
                </div>
            </section>
            {/* Section three */}
            <section className="pt-20 pb-12">
                <div className="container">
                    <div className="flex flex-col gap-y-20">
                        <div className="flex flex-col-reverse gap-y-10 xl:grid grid-cols-2 items-center gap-x-24 2xl:gap-x-36">
                            <picture>
                            <Image
                                src="/images/website/funciona/producto-1.webp"
                                alt="Shampoo"
                                width={700}
                                height={700}
                            />     
                            </picture>
                            <div className="flex flex-col gap-y-5">
                                <h3 className="text-white bg-oc-brown-1 text-xl sm:text-3xl py-2 font-semibold uppercase text-center w-[40%]">
                                    PASO 1
                                </h3>
                                <p className="text-lg text-justify text-oc-green-1">
                                    Usa el Shampoo 1 vez al día
                                    durante tu ducha con un masaje
                                    de al menos dos minutos. Esto servirá
                                    para nutrir el folículo.
                                </p>
                            </div>
                        </div>
                        <div className="gap-y-10 grid xl:grid-cols-2 items-center gap-x-24 2xl:gap-x-36">
                            <div className="flex flex-col gap-y-5">
                                <h3 className="text-white bg-oc-brown-1  text-xl sm:text-3xl py-2 font-semibold uppercase text-center w-[40%]">
                                    PASO 2
                                </h3>
                                <p className="text-lg text-justify text-oc-green-1">
                                    Aplica el Tónico 3 veces al día
                                    cada 8 horas con 2 atomizaciones
                                    en la zona a tratar y un masaje
                                    de al menos dos minutos.
                                    Así lograrás limpiar la raíz
                                    de tu cuello cabelludo a profundidad
                                </p>
                            </div>
                            <picture>
                                <Image
                                    src="/images/website/funciona/producto-2.webp"
                                    alt="Tónico"
                                    width={700}
                                    height={700}
                                />     
                            </picture>
                        </div>
                        <div className="flex flex-col-reverse gap-y-10 xl:grid grid-cols-2 items-center gap-x-24 2xl:gap-x-36">
                            <picture>
                            <Image
                                src="/images/website/funciona/producto-3.webp"
                                alt="Saw Palmetto"
                                width={700}
                                height={700}
                            />     
                            </picture>
                            <div className="flex flex-col gap-y-5">
                                <h3 className="text-white bg-oc-brown-1 text-xl sm:text-3xl py-2 font-semibold uppercase text-center w-[40%]">
                                    PASO 3
                                </h3>
                                <p className="text-lg text-justify text-oc-green-1">
                                    El Saw Palmetto será la clave
                                    para trabajar a nivel hormonal para bloquer
                                    la DHT, causante de la caída de cabello (Alopecia).
                                    Toma este complemento alimenticio
                                    2 veces al día, durante la mañana la y noche.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Banner */}
            <section>
                <div className="container">
                    <Banner />
                </div>
            </section>
            {/* Section five */}
            <section className="py-20">
                <div className="flex xl:flex-row gap-y-10 flex-col-reverse gap-x-12 items-center">
                    <figure>
                        <Image
                            src="/images/website/funciona/men.webp"
                            alt="Chico"
                            width={600}
                            height={600}
                        />
                    </figure>
                    <div className="flex flex-col gap-y-5 max-w-[26rem] sm:px-0 px-5">
                        <h2 className="uppercase text-xl sm:text-3xl font-bold text-oc-green-1 text-left">
                            Testimonios que Confirman la Calidad de Original Carranza
                        </h2>
                        <p className="text-justify text-oc-green-1">
                            Sabemos lo mucho que significa para ti encontrar un Tratamiento Capilar que funcione y te ayude a encontrar resultados. Por eso, nuestro equipo se ha encargado de crear un producto que sirva, sea sencillo de aplicar y que te haga sentir bien cuándo lo usas. Conoce algunos casos de éxito de personas que ya han usado y comprobado porque somos la Marca Número 1 en Tratamiento Capilar para la Caída de Cabello y ratar la Alopecia. 
                        </p>
                        <a href="/preguntas-frecuentes" className="text-center text-oc-green-1 text-xl">
                            Conoce Nuestra Garantía
                        </a>
                    </div>
                </div>
            </section>
            {/* Section six */}
            <section>
                <div className="container">
                    <div className="flex flex-col gap-y-12">
                        <div className="flex lg:flex-row flex-col lg:h-[40rem] gap-y-5">
                            <div className="flex flex-col lg:gap-y-0 gap-y-5">
                                <iframe className="h-80 lg:h-full w-full xl:w-[30rem]" src="https://www.youtube.com/embed/DckGF30nF3Q?si=m4BvInSAB6m9cVrZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                <iframe className="h-80 lg:h-full w-full xl:w-[30rem]" src="https://www.youtube.com/embed/C-5BggkL19w?si=NAYnoLqrky-ycWYz" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div>
                                <iframe className="w-full lg:w-[25rem] xl:w-[30rem] 2xl:w-[41rem] h-80 lg:h-full" src="https://www.youtube.com/embed/W_ZZ9dZE8T8?si=FJXfgLWZNBs9as0o" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                        <figure className="flex justify-center">
                            <Image
                                src="/images/website/funciona/crecimiento.webp"
                                alt="Crecimiento"
                                className="w-full"
                                width={800}
                                height={800}
                            />
                        </figure>
                    </div>
                </div>
            </section>
            {/* Section seven */}
            <section className="py-20">
                <div className="flex xl:flex-row justify-end gap-y-10 flex-col gap-x-12 items-center">
                    <div className="flex flex-col gap-y-5 max-w-[26rem] sm:px-0 px-5">
                        <h2 className="uppercase text-xl sm:text-3xl font-bold text-oc-green-1 text-left">
                            Tratamiento Capilar de Original Carranza
                        </h2>
                        <p className="text-justify text-oc-green-1">
                            Cada uno de nuestros productos integra ingredientes 100% naturales para asegurar resultados. Y sabemos que cada persona es diferente, porque te aseguramos resultados o te regresamos tu dinero.
                        </p>
                        <div className="flex justify-center">
                            <a href="/lo-mas-vendido" className="text-black text-lg hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4">
                            Comprar
                            </a>
                        </div>
                    </div>
                    <figure>
                        <Image
                            src="/images/website/funciona/woman.webp"
                            alt="Chica"
                            width={600}
                            height={600}
                        />
                    </figure>
                </div>
            </section>
            {/* Section certifications */}
            <section className="pb-20">
                <div className="container">
                    <Certifications />
                </div>
            </section>
            {/* Section Banner */}
            <section>
                <div className="container">
                    <Banner />
                </div>
            </section>
            {/* Section ingredients */}
            <section className="py-20">
                <div className="container">
                    <hgroup className="relative">
                        <h2 className="text-3xl relative z-20 sm:text-4xl text-center text-oc-green-1 uppercase md:text-5xl font-bold leading-[0.9]">
                            Tratamiento Capilar <br className="lg:block hidden" />
                            <span className="lg:text-6xl">con INGREDIENTES</span> 
                        </h2>
                        <figure className="lg:block hidden w-[58%] m-auto h-10 bg-oc-brown-1 absolute -bottom-3 left-0 right-0"></figure>
                    </hgroup>
                    <p className="text-xl pt-10 sm:pt-20 uppercase text-center sm:text-2xl text-oc-green-1 font-bold">
                        Somos una empresa mexicana dedicada a la elaboración
                        y distribución de tratamientos capilares 100% artesanales
                        a base de herbolaria orgánica.
                    </p>
                    <div className="py-10">
                        <div className="flex justify-center">
                            <div className="flex flex-col max-w-[29rem]">
                                <figure className="flex justify-center">
                                     <Image
                                        src="/images/website/funciona/1.webp"
                                        alt="Bergamota"
                                        width={300}
                                        height={300}
                                    />
                                </figure>
                                <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                    bergamota
                                </h3>
                                <p className="pt-5 text-center text-oc-green-1">
                                    Posee vitaminas que hidratan el cabello desde la raíz hasta las puntas, reparan las partes dañadas y evitan que las fibras se resequen. Ayuda a cicatrizar y desinflamar el cuero cabelludo, además de ser antiséptico y analgésico para la dermatitis.​
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 items-baseline">
                        <div className="flex justify-center">
                                <div className="flex flex-col max-w-[29rem]">
                                    <figure className="flex justify-center">
                                        <Image
                                            src="/images/website/funciona/2.webp"
                                            alt="Corteza de Nogal"
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                    <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                        Corteza de Nogal
                                    </h3>
                                    <p className="pt-5 text-center text-oc-green-1">
                                        Reduce la caída de cabello y ayuda en el crecimiento de nuevo cabello, además de eliminar las canas, hongos, alivia la conjuntivitis, acelera la curación y cicatrización de heridas en el cuero cabelludo.
                                    </p>
                                </div>
                        </div>
                        <div className="flex justify-center">
                                <div className="flex flex-col max-w-[29rem]">
                                    <figure className="flex justify-center">
                                        <Image
                                            src="/images/website/funciona/3.webp"
                                            alt="Cacahuananche"
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                    <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                        Cacahuananche
                                    </h3>
                                    <p className="pt-5 text-center text-oc-green-1">
                                        Fortalece y nutre el cabello delgado, además de que estimula la producción de keratina en los folículos pilosos. Su uso frecuente deriva en un pelo fuerte y sedoso. Además, controla la caspa e hipersudoración en el cuero cabelludo. Ayuda a detener la caída del cabello y regula la cantidad de sebo que produce el cuero cabelludo.
                                    </p>
                                </div>
                        </div>
                        <div className="flex justify-center">
                                <div className="flex flex-col max-w-[29rem]">
                                    <figure className="flex justify-center">
                                        <Image
                                            src="/images/website/funciona/4.webp"
                                            alt="Romero"
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                    <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                        Romero
                                    </h3>
                                    <p className="pt-5 text-center text-oc-green-1">
                                        Mejora la salud de tu pelo ya que acelera su crecimiento incluso en casos de alopecia, y estimula la circulación sanguínea del cuero cabelludo, repercutiendo en un cabello con más volumen, sedoso y suave.
                                    </p>
                                </div>
                        </div>
                        <div className="flex justify-center">
                                <div className="flex flex-col max-w-[29rem]">
                                    <figure className="flex justify-center">
                                        <Image
                                            src="/images/website/funciona/5.webp"
                                            alt="SÁBILA"
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                    <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                        SÁBILA
                                    </h3>
                                    <p className="pt-5 text-center text-oc-green-1">
                                        Funciona como un exfoliante natural absorbiendo el exceso de sebo producido por el cuero cabelludo que tapa los poros capilares, reduce la alopecia o calvicie, además de dar fuerza y brillo al cabello.
                                    </p>
                                </div>
                        </div>
                        <div className="flex justify-center">
                                <div className="flex flex-col max-w-[29rem]">
                                    <figure className="flex justify-center">
                                        <Image
                                            src="/images/website/funciona/6.webp"
                                            alt="Sangre de grado"
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                    <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                        Sangre de grado
                                    </h3>
                                    <p className="pt-5 text-center text-oc-green-1">
                                        Ayuda a evitar la caída del cabello quemado por tratamientos de belleza o para aumentar el brillo, elimina hongos como la orzuela y la caspa, además de ayudar al crecimiento del cabello.
                                    </p>
                                </div>
                        </div>
                        <div className="flex justify-center">
                                <div className="flex flex-col max-w-[29rem]">
                                    <figure className="flex justify-center">
                                        <Image
                                            src="/images/website/funciona/7.webp"
                                            alt="Amole"
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                    <h3 className="underline uppercase underline-offset-8 decoration-oc-brown-1 text-center text-oc-green-1 font-bold text-3xl">
                                        Amole
                                    </h3>
                                    <p className="pt-5 text-center text-oc-green-1">
                                        Esta hierba de la familia Agavaceae y su uso principal es para el crecimiento del cabello y evitar la caída de este, también es conocido como chambimbe, amole de bolita, el árbol del jabón, boliche, y/o paraparo.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section MX */}
            <section className="pb-20">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-y-8 gap-x-10">
                        <div className="flex flex-col gap-y-5">
                            <figure>
                                <Image
                                    src="/images/website/funciona/proceso-1.webp"
                                    alt="México"
                                    className="object-cover h-[30rem] w-full"
                                    width={300}
                                    height={300}
                                />
                            </figure>
                            <p className="text-center text-oc-green-1 uppercase font-bold text-xl">
                                Hecho con Procesos
                                de Herbolaria Mexicana
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <figure>
                                <Image
                                    src="/images/website/funciona/proceso-2.webp"
                                    alt="México"
                                    className="object-cover h-[30rem] w-full"
                                    width={300}
                                    height={300}
                                />
                            </figure>
                            <p className="text-center text-oc-green-1 uppercase font-bold text-xl">
                                Medicina Ancestral
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <figure>
                                <Image
                                    src="/images/website/funciona/proceso-3.webp"
                                    alt="México"
                                    className="object-cover h-[30rem] w-full"
                                    width={300}
                                    height={300}
                                />
                            </figure>
                            <p className="text-center text-oc-green-1 uppercase font-bold text-xl">
                                Utilizamos ingredientes
                                100% Naturales
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Banner */}
            <section className="pb-20">
                <div className="container">
                    <Banner />
                </div>
            </section>
            {/* Divider */}
            <div className="py-2 bg-oc-green-1 relative z-20"></div>
        </main>
    );
}