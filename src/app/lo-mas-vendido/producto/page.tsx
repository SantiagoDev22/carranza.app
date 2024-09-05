/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "",
  description: "",
};


export default function product() {   
    return (
        <div>
            <section className="pt-20 xl:pt-32 pb-20">
                <div className="container">
                    <div className="flex xl:flex-row flex-col gap-y-10 justify-around">
                        <figure className="flex justify-center">
                            <Image 
                                alt="Producto" 
                                src="/images/website/products/producto.png" 
                                width="400" 
                                height="400" 
                            />
                        </figure>
                        <div className="flex flex-col gap-y-7">
                            <div className="flex flex-col gap-y-4">
                                <p className="text-oc-green-1 text-3xl font-bold text-left xl:text-right">
                                    Détox Capilar Para 3 Meses de Uso
                                </p>
                                <p className="text-4xl font-bold text-oc-brown-1 text-left xl:text-right">
                                    $3,400
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="text-oc-green-1 text-left text-lg">
                                    Cantidad:
                                </p>       
                                <div className="border-oc-green-1 border-2 flex py-2 justify-between w-full px-3">
                                    <a href="#" className="rounded-full font-bold bg-oc-white-1 px-2 text-oc-green-1 flex items-center justify-center">
                                        -
                                    </a>
                                    <p className="text-center text-oc-green-1 font-bold">
                                        1
                                    </p>
                                    <a href="#" className="rounded-full font-bold bg-oc-white-1 px-2 text-oc-green-1 flex items-center justify-center">
                                        +
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center pt-8">
                                <a href="#" className="text-black text-2xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                                    Compra
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="grid grid-cols-3 gap-x-5 pt-11">
                        <li>
                            <Image 
                                alt="Producto" 
                                src="/images/website/products/1.png" 
                                width="400" 
                                height="400" 
                            />
                        </li>
                        <li>
                            <Image 
                                alt="Producto" 
                                src="/images/website/products/2.png" 
                                width="400" 
                                height="400" 
                            />
                        </li>
                        <li>
                            <Image 
                                alt="Producto" 
                                src="/images/website/products/2.png" 
                                width="400" 
                                height="400" 
                            />
                        </li>
                    </ul>
                    <div className="flex flex-col gap-y-6 pt-12">
                        <div className="divide-y-2 divide-oc-green-1">
                            <p className="text-left text-oc-green-1 text-xl font-bold pb-2">
                                Descripción y Detalles
                            </p>
                            <p className="text-lg text-oc-green-1 pt-5">
                                El Détox Capilar de Original Carranza contiene 3 Shampoos, 3 Tónicos y 3 Saw Palmettos, con el contenido necesario para 3 meses de uso. Seguimos al pie de la letra la de los 3 meses, ya que es el tiempo ideal para comenzar a ver resultados deseados y posteriormente irlos mejorando cada vez más. 
                            </p>
                        </div>
                        <div className="divide-y-2 divide-oc-green-1">
                            <p className="text-left text-oc-green-1 text-xl font-bold pb-2">
                                Características
                            </p>
                            <p className="text-lg text-oc-green-1 pt-5">
                                Cada Shampoo limpia y nutre tu folículo capilar, cada Tónico te ayudará a quitar las infecciones y promover el crecimiento de cabello donde ya no hay, o donde se está cayendo. Integrar el Saw Palmetto como suplemento alimenticio ayudará a trabajar a nivel hormonal, y logrará bloquear la DHT, causante de la caída de cabello.
                            </p>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2  md:gap-x-20 gap-y-14 max-w-[33rem] m-auto pt-16">
                        <li className="flex flex-col gap-y-5 max-w-[14rem]">
                            <figure className="flex justify-center">
                                <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.43 53.8399C27.21 53.8399 26.99 53.7999 26.78 53.7199C21.2 51.6499 16.34 48.2399 12.36 43.5799C9.19999 39.8899 6.59 35.41 4.59 30.28C1.21 21.6 0.749991 14.09 0.739991 13.78C0.699991 13.02 1.11999 12.3199 1.79999 11.9999L26.64 0.259956C27.14 0.0199561 27.73 0.0199561 28.23 0.259956L53.07 11.9999C53.75 12.3199 54.17 13.03 54.13 13.78C54.11 14.1 53.66 21.6 50.28 30.28C48.28 35.41 45.67 39.8799 42.51 43.5799C38.53 48.2399 33.67 51.6499 28.09 53.7199C27.86 53.7999 27.65 53.8399 27.43 53.8399ZM6.64002 13.8199C5.38002 14.4099 4.67002 15.76 4.89002 17.14C5.35002 20.04 6.28001 24.39 8.10001 29.03C9.95001 33.75 12.35 37.8499 15.23 41.2099C18.16 44.6199 21.6 47.28 25.49 49.14C26.72 49.73 28.16 49.73 29.39 49.14C33.28 47.28 36.72 44.6199 39.65 41.2099C42.53 37.8499 44.93 33.75 46.78 29.03C48.63 24.3 49.56 19.8699 50.02 16.9799C50.22 15.6999 49.56 14.44 48.39 13.89L28.64 4.56C27.89 4.21 27.02 4.21 26.27 4.56L6.64002 13.8199Z" fill="#C67437"/>
                                    <path d="M24.23 36.5699C24.22 36.5699 24.2 36.5699 24.19 36.5699C23.4 36.5499 22.68 36.1 22.33 35.39C21.18 33.05 19.03 31.16 16.57 30.31C15.46 29.93 14.87 28.73 15.25 27.62C15.63 26.51 16.83 25.92 17.94 26.3C20.34 27.12 22.47 28.58 24.12 30.48C27.87 24.62 32.91 19.55 38.28 16.29C39.28 15.68 40.58 16 41.19 17C41.8 18 41.48 19.3 40.48 19.91C37.59 21.67 34.82 23.9899 32.25 26.8199C29.87 29.4399 27.74 32.4299 26.1 35.4599C25.72 36.1499 25.01 36.5699 24.23 36.5699Z" fill="#C67437"/>
                                </svg>
                            </figure>
                            <p className="text-oc-green-1 text-center font-bold sm:text-lg md:text-xl">
                                Pago seguro
                            </p>
                        </li>
                        <li className="flex flex-col gap-y-5 max-w-[14rem]">
                            <figure className="flex justify-center">
                                <svg width="58" height="54" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.21 52.86H20.01V31.84C20.01 29.84 21.63 28.22 23.63 28.22H33.59C35.59 28.22 37.21 29.84 37.21 31.84V52.86ZM23.47 49.41H33.76V31.84C33.76 31.75 33.69 31.67 33.59 31.67H23.63C23.54 31.67 23.46 31.74 23.46 31.84V49.41H23.47Z" fill="#C67437"/>
                                    <path d="M49.5 53.4399H9.58002C6.67002 53.4399 4.31 51.08 4.31 48.17V27.54C4.31 26.27 5.33999 25.24 6.60999 25.24C7.87999 25.24 8.90997 26.27 8.90997 27.54V48.17C8.90997 48.54 9.21002 48.84 9.58002 48.84H49.5C49.87 48.84 50.17 48.54 50.17 48.17V21.5H54.78V48.17C54.77 51.08 52.41 53.4399 49.5 53.4399Z" fill="#C67437"/>
                                    <path d="M48.97 24.3101C46.37 24.3101 43.93 23.18 42.25 21.28C40.58 23.08 38.22 24.15 35.69 24.15C33.14 24.15 30.75 23.06 29.09 21.23C27.42 23.06 25.04 24.15 22.49 24.15C19.92 24.15 17.52 23.0399 15.85 21.1899C14.04 23.1899 11.38 24.33 8.59003 24.13C3.91003 23.81 0.23999 19.7199 0.23999 14.8199V14.12L7.95001 2.63C8.82001 1.33 10.28 0.550049 11.85 0.550049L46.3 0.47998C46.3 0.47998 46.3 0.47998 46.31 0.47998C47.9 0.47998 49.37 1.26998 50.24 2.59998L57.94 14.29V14.98C57.94 19.88 54.27 23.97 49.59 24.29C49.38 24.3 49.17 24.3101 48.97 24.3101ZM42.29 15.28C42.3 15.28 42.31 15.28 42.33 15.28C43.48 15.29 44.51 15.99 44.96 17.05C45.68 18.76 47.42 19.8099 49.27 19.6899C51.31 19.5499 53.01 17.77 53.29 15.6L46.39 5.12L11.85 5.14001L11.77 5.18005L4.88 15.4399C5.16001 17.6099 6.86002 19.38 8.90002 19.52C10.75 19.65 12.44 18.63 13.19 16.92C13.65 15.86 14.7 15.18 15.85 15.17C17 15.17 18.05 15.86 18.52 16.92C19.22 18.5 20.78 19.52 22.5 19.52C24.21 19.52 25.77 18.5001 26.46 16.9301C26.93 15.8801 27.96 15.2 29.1 15.2C30.24 15.2 31.28 15.8801 31.74 16.9301C32.44 18.5001 33.99 19.52 35.7 19.52C37.39 19.52 38.94 18.52 39.65 16.97C40.12 15.95 41.16 15.28 42.29 15.28Z" fill="#C67437"/>
                                </svg>
                            </figure>
                            <p className="text-oc-green-1 text-center font-bold sm:text-lg md:text-xl">
                                Recibe de 3 a 7 días
                            </p>
                        </li>
                        <li className="flex flex-col gap-y-5 max-w-[14rem]">
                            <figure className="flex justify-center">
                                <svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M56.14 15.72H3.98999V21.48H56.14V15.72Z" fill="#C67437"/>
                                    <path d="M18.02 35.36H11.61C10.34 35.36 9.31 34.3301 9.31 33.0601C9.31 31.7901 10.34 30.76 11.61 30.76H18.02C19.29 30.76 20.32 31.7901 20.32 33.0601C20.33 34.3201 19.3 35.36 18.02 35.36Z" fill="#C67437"/>
                                    <path d="M49.61 44.3199H9.23999C4.49999 44.3199 0.640015 40.46 0.640015 35.72V8.70996C0.640015 3.96996 4.49999 0.109985 9.23999 0.109985H49.61C54.35 0.109985 58.21 3.96996 58.21 8.70996V35.72C58.21 40.46 54.35 44.3199 49.61 44.3199ZM9.23999 4.70996C7.03999 4.70996 5.25 6.49996 5.25 8.70996V35.72C5.25 37.92 7.03999 39.71 9.23999 39.71H49.61C51.81 39.71 53.6 37.92 53.6 35.72V8.70996C53.6 6.50996 51.81 4.70996 49.61 4.70996H9.23999Z" fill="#C67437"/>
                                </svg>
                            </figure>
                            <p className="text-oc-green-1 text-center font-bold sm:text-lg md:text-xl">
                                Meses Sin Intereses
                            </p>
                        </li>
                        <li className="flex flex-col gap-y-5 max-w-[14rem]">
                            <figure className="flex justify-center">
                                <svg width="60" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M57.6 19.22H42.47V22.65H57.6V19.22Z" fill="#C67437"/>
                                    <path d="M50.46 9.45996H44.52V12.89H48.87C49.44 12.89 49.97 13.1399 50.34 13.5699L55.87 20.08L55.81 33.98H46.9C47.06 34.43 47.15 34.91 47.15 35.42C47.15 36.14 46.96 36.81 46.66 37.41H55.81C57.74 37.41 59.3 35.85 59.3 33.92V19.16C59.3 18.95 59.22 18.74 59.09 18.58L51.92 10.16C51.57 9.71003 51.03 9.45996 50.46 9.45996Z" fill="#C67437"/>
                                    <path d="M38.78 33.41L22.07 33.45C22.37 34.04 22.55 34.7 22.55 35.41C22.55 36.39 22.22 37.28 21.69 38.02L39.12 37.98C38.6 37.25 38.29 36.37 38.29 35.41C38.28 34.68 38.47 34.01 38.78 33.41Z" fill="#C67437"/>
                                    <path d="M42.72 30.97C43.36 30.97 43.97 31.11 44.53 31.36V12.89V9.45996V5.08997C44.53 2.75997 42.64 0.869995 40.31 0.869995H3.15002C1.89002 0.869995 0.869995 1.89002 0.869995 3.15002C0.869995 4.41002 1.89002 5.43005 3.15002 5.43005H39.96V31.95C40.72 31.35 41.67 30.97 42.72 30.97Z" fill="#C67437"/>
                                    <path d="M14.14 33.46L10.26 33.47V17.79H5.69V33.66C5.69 34.64 5.96001 35.62 6.57001 36.39C7.39001 37.44 8.60998 38.04 9.91998 38.04H9.92999L14.55 38.03C14.01 37.29 13.68 36.39 13.68 35.41C13.67 34.71 13.85 34.05 14.14 33.46Z" fill="#C67437"/>
                                    <path d="M42.72 41.5601C39.33 41.5601 36.57 38.8 36.57 35.41C36.57 32.02 39.33 29.26 42.72 29.26C46.11 29.26 48.87 32.02 48.87 35.41C48.87 38.8 46.11 41.5601 42.72 41.5601ZM42.72 32.6801C41.22 32.6801 40 33.9 40 35.4C40 36.9 41.22 38.12 42.72 38.12C44.22 38.12 45.44 36.9 45.44 35.4C45.44 33.9 44.22 32.6801 42.72 32.6801Z" fill="#C67437"/>
                                    <path d="M18.11 41.5601C14.72 41.5601 11.96 38.8 11.96 35.41C11.96 32.02 14.72 29.26 18.11 29.26C21.5 29.26 24.26 32.02 24.26 35.41C24.26 38.8 21.5 41.5601 18.11 41.5601ZM18.11 32.6801C16.61 32.6801 15.39 33.9 15.39 35.4C15.39 36.9 16.61 38.12 18.11 38.12C19.61 38.12 20.83 36.9 20.83 35.4C20.83 33.9 19.61 32.6801 18.11 32.6801Z" fill="#C67437"/>
                                    <path d="M18.08 12.9399H4.12C3.01 12.9399 2.10999 12.0401 2.10999 10.9301C2.10999 9.82005 3.01 8.92004 4.12 8.92004H18.08C19.19 8.92004 20.09 9.82005 20.09 10.9301C20.09 12.0401 19.19 12.9399 18.08 12.9399Z" fill="#C67437"/>
                                    <path d="M12.38 19.19L6.65 19.1C5.7 19.08 4.95 18.3 4.96 17.36C4.98 16.41 5.75999 15.6601 6.69999 15.6801L12.43 15.77C13.38 15.79 14.13 16.57 14.12 17.51C14.11 18.45 13.33 19.2 12.38 19.19Z" fill="#C67437"/>
                                </svg>
                            </figure>
                            <p className="text-oc-green-1 text-center font-bold sm:text-lg md:text-xl">
                                Envíos 100% seguros
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Divider */}
            <div className="py-1 bg-oc-green-1 relative z-20"></div>
        </div>
    );
}